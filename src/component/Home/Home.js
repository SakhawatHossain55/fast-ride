import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PackData from "../../component/PackData/PackData.json";
import Vehicle from "../Vehicle/Vehicle";
import './Home.css'

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    setVehicles(PackData);
    // console.log(PackData);
  });
  return (
    <div className="background">
      <Container>
        <div className="row">
          {vehicles.map((vehicle) => (
            <Vehicle vehicle={vehicle} key={vehicle.id}></Vehicle>
          ))}
        </div>
        </Container>
    </div>
  );
};

export default Home;
