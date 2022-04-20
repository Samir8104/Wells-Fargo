import React from "react";
import "../CSS/Homepage.css";
import HomePage from "../static/TestImg.jpg";
import { Button } from "react-bootstrap";
import Featured from "../Componets/Featured.js"
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home-body">
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />  
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br /> 
     <Link to="/featured"> 
      <Button to={Featured}className="behind-button" variant="danger">
       Featured Rewards 
        </Button>
        </Link> 
      {/* <img className="front-image" src={HomePage} /> */}
    </div>
  );
};

export default Homepage;
