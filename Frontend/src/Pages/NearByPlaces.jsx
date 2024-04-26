import { useAppContext } from "../../contexts/appContext";

const NearByPlaces = () => {
  const { nearby } = useAppContext();

  return (
    nearby.length > 0 && (
      <div className="py-32">
        <div className="text-center">
          <h1 className="title font-medium">All Nearby Places</h1>
          <p>Explore hundreds of places</p>
        </div>
        <div className="px-14">
          {/* {data.map((a) => (
          <Singleplace key={a.id} a={a}></Singleplace>
        ))} */}
        </div>
      </div>
    )
  );
};

export default NearByPlaces;
