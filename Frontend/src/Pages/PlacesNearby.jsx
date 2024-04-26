import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useAppContext } from "../../contexts/appContext";

const iconDesign = {
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
};

const PlacesNearby = () => {
  const { nearby } = useAppContext();
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 23.873751,
    longitude: 90.396454,
  });
  const [searched, setSearched] = useState(false); // State to track if a search has been made
  const mapRef = useRef(null);

  useEffect(() => {
    if (nearby && nearby.features && nearby.features.length > 0) {
      setCurrentLocation({
        latitude: nearby.features[0]?.properties?.lat,
        longitude: nearby.features[0]?.properties?.lon,
      });
      setSearched(true); // Set searched to true when nearby data is available
    }
  }, [nearby]);

  return (
    <div>
      <br />
      <br />
      <div className="work-section-top">
        <p className="primary-subheading">Place Nearby</p>
      </div>
      <center>
        <br />
        <MapContainer
          center={[currentLocation.latitude, currentLocation.longitude]}
          zoom={10}
          style={{ height: "400px", width: "80%" }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {searched && ( // Conditionally render the Circle component
            <Circle
              center={[currentLocation.latitude, currentLocation.longitude]}
              radius={4000} // Adjust the radius as needed (in meters)
              pathOptions={{ color: "blue", fillColor: "blue" }}
            />
          )}
          {nearby?.features?.map((feature, index) =>
            feature.geometry && feature.geometry ? (
              <Marker
                key={index}
                position={[
                  feature.geometry.coordinates[1], // Longitude first, then latitude
                  feature.geometry.coordinates[0],
                ]}
                icon={L.icon(iconDesign)}
              >
                <Popup>
                  {feature.properties && feature.properties.name
                    ? feature.properties.name
                    : "Place"}
                </Popup>
              </Marker>
            ) : null
          )}
        </MapContainer>
      </center>
    </div>
  );
};

export default PlacesNearby;
