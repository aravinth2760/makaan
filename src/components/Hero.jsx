import "../styles/hero.css";

import { Carousel, Form, Button } from "react-bootstrap";

import crsl1 from "../assets/carousel-1.jpg";
import crsl2 from "../assets/carousel-2.jpg";

const Hero = ({ renderContent }) => {
  return (
    <>
      <section className="d-lg-flex flex-lg-row-reverse gap-3 justify-content-between align-items-center">
        <Carousel interval={2000} className="mx-auto mx-lg-0">
          <Carousel.Item>
            <img src={crsl1} alt="Carousel1" className="img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={crsl2} alt="Carousel2" className="img-fluid" />
          </Carousel.Item>
        </Carousel>
        <div style={{ height: "fit-content" }} className="p-5">
          {renderContent()}
        </div>
      </section>
      <section
        className="p-3 py-lg-5 d-flex gap-1 gap-md-3 gap-lg-3 flex-wrap justify-content-evenly"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <Form.Control
          type="text"
          placeholder="Search Keyword"
          style={{
            height: "50px",
            width: "304px",
            padding: "0.5rem 0.75rem",
          }}
        />
        <Form.Select
          aria-label="Dropdown example"
          style={{
            height: "50px",
            width: "304px",
            padding: "0.5rem 0.75rem",
          }}
        >
          <option>Property Type</option>
          <option value="1">Property Type 1</option>
          <option value="2">Property Type 2</option>
          <option value="2">Property Type 3</option>
        </Form.Select>
        <Form.Select
          aria-label="Dropdown example"
          style={{
            height: "50px",
            width: "304px",
            padding: "0.5rem 0.75rem",
          }}
        >
          <option>Location</option>
          <option value="1">Location 1</option>
          <option value="2">Location 2</option>
          <option value="2">Location 3</option>
        </Form.Select>

        <Button
          style={{
            width: "304px",
            height: "50px",
            backgroundColor: "var(--accient)",
            border: "none",
          }}
        >
          Dark
        </Button>
      </section>
    </>
  );
};
export default Hero;
