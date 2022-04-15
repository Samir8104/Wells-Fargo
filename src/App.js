import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <Navbar className="top-bar mx-auto" expand="lg">
  <Container>
  <Navbar.Brand >Navbar with text</Navbar.Brand>

      {/* <Row className="justify-content-center">
        <Col className="text-center"></Col>
        <div className="top-bar">
          <Button variant="danger">Wells Fargo</Button>
        </div>
      </Row>
    </Container> */}
    </Container>
</Navbar>
  );
}

export default App;
