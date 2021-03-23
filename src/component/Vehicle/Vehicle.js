import React from "react";
import { useHistory } from "react-router";
import './Vehicle.css'
 
const Vehicle = (props) => {
  console.log(props.vehicle);
  const { name, id, image } = props.vehicle;
  const history = useHistory()
const handleRideClick = () => {
  history.push(`/destination/${id}`
  )
}

  return (
    <div className="col-lg-3">
      <div className="p-5 text-center main-style">
      
        <div onClick={() => handleRideClick()}>
          <img src={image} alt="" />
          <h3>{name}</h3>
        </div>
        </div>
    </div>
  );
};

export default Vehicle;
