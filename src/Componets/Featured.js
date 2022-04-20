import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import "../CSS/Featured.css";
import RadiantVal from "../static/CrisisBundle.jpg";
import Nunca from "../static/NuncaSkin.webp";
import GreenVal from "../static/GreenVal.webp";
import Hazmat from "../static/HazmatCOD.webp";
import COD3 from "../static/COD3.jpg";
import Nike from "../static/Nike1.webp";
import NikeAir from "../static/nikeAir.webp";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="parent-div">
      <div className="top-bar">
        <h1 className="header">Your Featured Rewards</h1>
      </div>

      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={RadiantVal} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Nunca} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={GreenVal} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Exlusive VALORANT rewards</Card.Title>
          <Card.Text>
            Get a FREE Valorant skin just for signing up. Offer ends at 5/1/2022
          </Card.Text>
          <Card.Link href="https://playvalorant.com/en-us/">
            <Button variant="danger">Redeem now!</Button>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.mos.cms.futurecdn.net/2WvkBYCfjuGwUtxPYmexUg.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Hazmat} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={COD3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Exlusive COD rewards</Card.Title>
          <Card.Text>
            Get a FREE Call of Duty skin just for signing up. Offer ends at
            5/10/2022
          </Card.Text>
          <Card.Link href="https://www.callofduty.com/warzone/strategyguide/pre-game-preparation/wz-operators">
          <Button variant="danger">Redeem now!</Button>

          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Nike} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={NikeAir} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-videoSixteenByNineJumbo1600.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Exlusive NIKE rewards</Card.Title>
          <Card.Text>
            Buy exlusive NIKE shoes. These shoes can only be bought from the
            Wells Fargo App. Offer ends at 5/10/2022
          </Card.Text>
          <Card.Link href="https://www.nike.com/">
            <Button variant="danger">Buy now!</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Featured;
