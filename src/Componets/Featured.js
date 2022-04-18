import React from "react";
import {Button, Card} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import "../CSS/Featured.css";


const Featured = () => {
    return(

<div className="parent-div">

<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Carousel fade>
          

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.mos.cms.futurecdn.net/2WvkBYCfjuGwUtxPYmexUg.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{color: "red"}}>FREE Call of Duty skin</h3>
              <p  style={{color: "yellow"}}>Redeem now! Claim before 5/1/2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2022/01/Protocol_Bundle_1920x1080-2-1024x576.jpg"
              alt="Second slide"
            />
              
            <Carousel.Caption>
              <h3 style={{color: "red"}}>FREE Valorant skin</h3>
              <p style={{color: "yellow"}}>Redeem now! Claim before 5/1/2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-videoSixteenByNineJumbo1600.jpg"
              alt="Third slide"
            />
      
            <Carousel.Caption>
              <h3 style={{color: "red"}}>Exlusive Nike shoe</h3>
              <p style={{color: "yellow"}}>Buy now, limited time offer, before 5/1/2022</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>



</div>
    );
}
export default Featured;