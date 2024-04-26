import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icons for different categories
const categoryIcons = {
  restaurant: "https://cdn-icons-png.flaticon.com/512/1993/1993784.png",
  hospital: "https://cdn-icons-png.flaticon.com/512/4141/4141255.png",
  // Add more categories and their respective icons as needed
};

// This is a helper component to handle map centering due to the way react-leaflet v3 works with imperative code
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

const PlacesNearby = () => {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState({
    latitude: 23.873751,
    longitude: 90.396454,
  }); // Default to Uttara, Dhaka
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("restaurant");
  const [categories, setCategories] = useState([]);

  const mapRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPlaces(location.latitude, location.longitude, category);
  }, [location, category]);

  const fetchCategories = async () => {
    const nominatimUrl = "https://nominatim.openstreetmap.org/keys/";
    try {
      const response = await axios.get(nominatimUrl);
      const categories = response.data.amenity;
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPlaces = async (latitude, longitude, category) => {
    const overpassUrl = "https://overpass-api.de/api/interpreter";
    const query = `
      [out:json];
      (
        node["amenity"="${category}"](around:1000,${latitude},${longitude});
        way["amenity"="${category}"](around:1000,${latitude},${longitude});
        relation["amenity"="${category}"](around:1000,${latitude},${longitude});
      );
      out center;
    `;

    try {
      const response = await axios.get(overpassUrl, {
        params: { data: query },
      });
      setPlaces(response.data.elements);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const nominatimUrl = "https://nominatim.openstreetmap.org/search";
    try {
      const response = await axios.get(nominatimUrl, {
        params: {
          q: search,
          format: "json",
          limit: 1,
        },
      });

      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setLocation({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
      } else {
        alert("Location not found.");
      }
    } catch (error) {
      console.error("Error during geocoding:", error);
      alert("Error searching for location.");
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="work-section-top">
        <p className="primary-subheading">Places Near Me</p>
      </div>
      <center>
        <form onSubmit={handleSearch}>
          <label>Enter a location: </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a location"
          />
          <br />
          <label>Select category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Search</button>
        </form>
        <br />
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={15}
          style={{ height: "400px", width: "80%" }}
          ref={mapRef}
        >
          <ChangeMapView center={[location.latitude, location.longitude]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {places.map((place, index) =>
            place.lat && place.lon ? (
              <Marker
                key={index}
                position={[place.lat, place.lon]}
                icon={L.icon({
                  iconUrl: categoryIcons[category] || "https://leafletjs.com/examples/custom-icons/leaf-red.png",
                  iconSize: [35, 35],
                  iconAnchor: [17, 35],
                  popupAnchor: [0, -35],
                })}
              >
                <Popup>
                  {place.tags && place.tags.name ? place.tags.name : "Place"}
                </Popup>
              </Marker>
            ) : null
          )}
        </MapContainer>
      </center>
      <div className="cards">
        <h3>Places in {search}</h3>
        <Row xs={1} md={3} className="g-3">
          {places.map((place, index) =>
            place.lat && place.lon ? (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {place.tags && place.tags.name ? place.tags.name : "Place"}
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      ({place.lat}, {place.lon})
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ) : null
          )}
        </Row>
      </div>
    </div>
  );
};

export default PlacesNearby;
