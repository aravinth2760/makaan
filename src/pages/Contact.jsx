import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Hero from "../components/Hero";

const Contact = () => {
  const contactLists = [
    { icon: "location-dot", content: "123 Street, New York, USA" },
    { icon: "fa-envelope", content: "info@example.com" },
    { icon: "fa-phone", content: "+012 345 6789" },
  ];
  return (
    <>
      <Hero
        renderContent={() => (
          <>
            <h1 className="display-6 fw-bold mb-3">Contact Us</h1>
            <div className="d-flex gap-2 text-uppercase text-muted">
              <p style={{ color: "var(--primary)" }}>Home</p>
              <span>/</span>
              <p style={{ color: "var(--primary)" }}>pages</p>
              <span>/</span>
              <p>contact</p>
            </div>
          </>
        )}
      />
      <section className="text-center mb-3 mt-5">
        <h1 className="display-6 fw-bold mb-3">Contact Us</h1>
        <p className="fw-lighter">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd <br />
          vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </section>
      <section className="p-2 p-md-3">
        <Row className="p-3 gap-4">
          {contactLists.map((contact, i) => {
            return (
              <Col
                style={{
                  minWidth: "320px",
                  backgroundColor: "var(--secondary)",
                }}
                className="p-3"
                key={i}
              >
                <div
                  className="py-3 ps-4 d-flex gap-3 align-items-center bg-white"
                  style={{ border: "1px dashed var(--primary)" }}
                >
                  <FontAwesomeIcon
                    icon={contact.icon}
                    size="lg"
                    color="var(--primary)"
                    style={{
                      border: "1px dashed var(--primary)",
                      borderRadius: "50%",
                      padding: "12px",
                    }}
                  ></FontAwesomeIcon>
                  <p className="m-0">{contact.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
      <Row className="mb-5 gap-2 p-2 p-md-3">
        <Col style={{ minWidth: "350px" }}>
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7787999.123456789!2d77.0!3d11.0598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5256a93b8e0f1d%3A0x123456789abcdef!2sTamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1736500000000!5m2!1sen!2sin"
            title="India | Tamilnadu"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </Col>
        <Col style={{ minWidth: "350px" }}>
          <p>
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <span style={{ color: "var(--primary)" }}>Download Now.</span>
          </p>
          <Form className="mt-4">
            <Row className="gap-1">
              <Col>
                <FloatingLabel label="Your Name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label="Your Email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel label="Subject" className="mb-4">
              <Form.Control type="text" name="subject" placeholder="Subject" />
            </FloatingLabel>
            <FloatingLabel label="Message" className="mb-4">
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Message"
                style={{ resize: "vertical" }}
              />
            </FloatingLabel>
            <Button
              type="submit"
              className="w-100 py-3 border-0"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Contact;
