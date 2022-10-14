import { useContext } from "react";
import "./Home.css";
import Locations from "../../components/Locations";
import { LocationContext } from "../../context/LocationContext";

const Home = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div className="main-container">
      <Locations locations={locations} />
    </div>
  );
};

export default Home;
