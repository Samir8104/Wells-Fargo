import React from "react";
import "../CSS/Homepage.css";
import {Button} from "react-bootstrap";
const Homepage = () => {
    return(
        <div>
            <div className="top-bar">
                <h1 className="header">
                Wells Fargo Getit 
                </h1>
            </div>

            {/* put the buttons inside a parent div. Make the div a "flex box" using CSS property "display"
            after tht, mess around with flexbox properties to try and align them the way you want.
            */}
            <div className="FlexBox">
            <Button  variant="danger">Featured Rewards</Button>
            <Button  variant="danger">Upcoming Rewards</Button>
            <Button  variant="danger">Minigames</Button>
            </div> 
            
        </div>


    );
};

export default Homepage;