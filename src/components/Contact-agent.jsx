import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import agentImg from "../assets/call-to-action.jpg";

const ContactAgent = () => {
  return (
    <>
      <section
        style={{ backgroundColor: "var(--secondary)" }}
        className="m-0 m-md-3 py-4 px-5"
      >
        <Row
          className="p-5 bg-white"
          style={{ border: "1px dashed var(--primary)" }}
        >
          <Col lg={6} className="wow fadeIn p-0 p-md-2" data-wow-delay=".1s">
            <div className="">
              <img src={agentImg} className="img-fluid w-100" alt="About" />
            </div>
          </Col>
          <Col
            lg={6}
            className="wow fadeIn d-flex justify-content-center align-items-center py-2 py-md-0"
            data-wow-delay=".1s"
          >
            <div>
              <h1>
                Contact With Our Certified <br /> Agent
              </h1>
              <p>
                Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                vero ipsum <br /> sit sit diam justo sed vero dolor duo.
              </p>
              <div className="d-flex gap-2">
                <Button
                  style={{
                    height: "60px",
                    backgroundColor: "var(--primary)",
                    border: "none",
                  }}
                  className="px-4"
                >
                  <FontAwesomeIcon icon="phone" className="me-2" />
                  Make A Call
                </Button>
                <Button
                  style={{
                    height: "60px",
                    backgroundColor: "var(--accient)",
                    border: "none",
                  }}
                  className="px-4"
                >
                  <FontAwesomeIcon icon="calendar-alt" className="me-2" />
                  Get Appoinment
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default ContactAgent;
