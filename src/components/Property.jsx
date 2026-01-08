import "../styles/property.css";

import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import aboutImg from "../assets/about.jpg";

const Property = () => {
  return (
    <>
      <Row className="p-2 p-md-3 p-lg-5">
        <Col lg={6} className="wow fadeIn" data-wow-delay=".1s">
          <div className="about-img position-relative overflow-hidden p-5 pe-0">
            <img src={aboutImg} className="img-fluid w-100" alt="About" />
          </div>
        </Col>
        <Col
          lg={6}
          className="wow fadeIn d-flex justify-content-center align-items-center  p-3 p-lg-5"
          data-wow-delay=".1s"
        >
          <div className="about position-relative overflow-hidden">
            <h1 className="display-5 fw-bold mb-3">
              #1 Place To Find The Perfect Property
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon="check"
                className="me-2"
                style={{ color: "var(--primary)" }}
              />
              Tempor erat elitr rebum at clita
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon="check"
                className="me-2"
                style={{ color: "var(--primary)" }}
              />
              Aliqu diam amet diam et eos
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon="check"
                className="me-2"
                style={{ color: "var(--primary)" }}
              />
              Clita duo justo magna dolore erat amet
            </p>
            <Button
              style={{
                height: "50px",
                backgroundColor: "var(--primary)",
                border: "none",
              }}
              className="px-4"
            >
              Read More
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Property;
