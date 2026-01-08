import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import p1 from "../assets/property/property-1.jpg";
import p2 from "../assets/property/property-2.jpg";
import p3 from "../assets/property/property-3.jpg";
import p4 from "../assets/property/property-4.jpg";
import p5 from "../assets/property/property-5.jpg";
import p6 from "../assets/property/property-6.jpg";

const AppFooter = () => {
  const propertyList = [p1, p2, p3, p4, p5, p6];
  const links = [
    "About Us",
    "Contact Us",
    "Our Services",
    "Privacy Policy",
    "Terms & Condition",
  ];
  const icons = ["twitter", "facebook-f", "youtube", "linkedin-in"];

  return (
    <footer
      className="text-light py-5 px-3 px-lg-0"
      style={{ backgroundColor: "var(--accient)" }}
    >
      <section className="d-flex flex-wrap justify-content-evenly gap-4 p-2">
        <div style={{ width: "308px" }} className="py-3 py-md-0">
          <h4 className="mb-2 mb-md-3 mb-lg-4">Get In Touch</h4>
          <p className="mb-1 fw-lighter fs-6">
            <FontAwesomeIcon icon="location-dot" className="me-2" />
            123 Street, New York, USA
          </p>
          <p className="mb-1 fw-lighter fs-6">
            <FontAwesomeIcon icon="phone" className="me-2" />
            +012 345 67890
          </p>
          <p className="mb-1 fw-lighter fs-6">
            <FontAwesomeIcon icon="envelope" className="me-2" />
            info@example.com
          </p>
          <div className="d-flex gap-3 mt-4">
            {icons.map((icon, i) => {
              return (
                <FontAwesomeIcon
                  icon={["fab", icon]}
                  className="text-white p-2 border rounded-circle"
                  size="sm"
                />
              );
            })}
          </div>
        </div>

        <div style={{ width: "308px" }} className="py-3 py-md-0">
          <h4 className="mb-2 mb-md-3 mb-lg-4">Quick Links</h4>
          {links.map((link, i) => {
            return (
              <p className="mb-1 fw-lighter fs-6">
                <FontAwesomeIcon icon="angle-right" className="me-1" />
                {link}
              </p>
            );
          })}
        </div>

        <div className="py-3 py-md-0">
          <h4 className="mb-2 mb-md-3 mb-lg-4">Photo Gallery</h4>
          <div className="d-flex flex-wrap gap-1" style={{ width: "308px" }}>
            {propertyList.map((src, i) => {
              return (
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    border: "3px solid white",
                  }}
                  className="rounded-1"
                />
              );
            })}
          </div>
        </div>

        <div style={{ width: "308px" }} className="py-3 py-md-0">
          <h4 className="mb-2 mb-md-3 mb-lg-4">Newsletter</h4>
          <p className="fw-lighter fs-6">
            Dolor amet sit justo amet elitr clita <br /> ipsum elitr est.
          </p>
          <div className="position-relative">
            <Form.Control
              type="text"
              placeholder="Your email"
              style={{
                height: "50px",
                width: "100%",
                padding: "0.5rem 0.75rem",
              }}
              className="bg-transparent text-white newsletter-input border-white"
            />
            <Button
              size="md"
              className="position-absolute"
              style={{
                backgroundColor: "var(--primary)",
                top: "6px",
                right: "6px",
              }}
            >
              SignUp
            </Button>
          </div>
        </div>
      </section>
      <hr className="my-4" />
      <Row className="text-center">
        <Col>&copy; Your Site. All rights reserved. Designed with HTML.</Col>
      </Row>
    </footer>
  );
};
export default AppFooter;
