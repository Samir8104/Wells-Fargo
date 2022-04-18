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

            <div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='orange-column'>
        Some Text in Column One
      </div>
    </div>
    <div class='column'>
      <div class='blue-column'>
        Some Text in Column Two
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        Some Text in Column Three
      </div>
    </div>
  </div>
  <div class='row 2'>
    <div class='column'>
      <div class='green-column'>
        Some Text in Row 2, Column One
      </div>
    </div>
    <div class='column'>
      <div class='orange-column'>
        Some Text in Row 2, Column Two
      </div>
    </div>
    <div class='column'>
      <div class='blue-column'>
        Some Text in Row2, Column Three
      </div>
    </div>
  </div>
</div>

            {/* put the buttons inside a parent div. Make the div a "flex box" using CSS property "display"
            after tht, mess around with flexbox properties to try and align them the way you want.
            */}
            <div className="FlexBox">
            <Button  variant="danger">Featured Rewards</Button>
c            <Button  variant="danger">Upcoming Rewards</Button>
            <Button  variant="danger">Minigames</Button>
            </div> 
            
        </div>


    );
};

export default Homepage;