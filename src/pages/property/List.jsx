import { useLocation } from "react-router-dom";
import { Button, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Hero from "../../components/Hero";
import ContactAgent from "../../components/Contact-agent";

import property1 from "../../assets/property/property-1.jpg";
import property2 from "../../assets/property/property-2.jpg";
import property3 from "../../assets/property/property-3.jpg";
import property4 from "../../assets/property/property-4.jpg";
import property5 from "../../assets/property/property-5.jpg";
import property6 from "../../assets/property/property-6.jpg";

const List = () => {
  const location = useLocation();

  const lists = [
    { name: "Appartment", src: property1 },
    { name: "Villa", src: property2 },
    { name: "Office", src: property3 },
    { name: "Building", src: property4 },
    { name: "Home", src: property5 },
    { name: "Shop", src: property6 },
  ];

  return (
    <>
      {location.pathname === "/property-list" && (
        <Hero
          renderContent={() => (
            <>
              <h1 className="display-6 fw-bold mb-3">Property List</h1>
              <div className="d-flex gap-2 text-uppercase text-muted">
                <p style={{ color: "var(--primary)" }}>Home</p>
                <span>/</span>
                <p style={{ color: "var(--primary)" }}>pages</p>
                <span>/</span>
                <p>property list</p>
              </div>
            </>
          )}
        />
      )}
      <section className="d-flex flex-wrap justify-content-between m-3 m-md-5 align-items-end">
        <div>
          <h1 className="display-5 fw-bold mb-3">Property Listing</h1>
          <p className="fw-lighter">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd <br /> vero ipsum sit eirmod sit diam justo sed rebum.
          </p>
        </div>
        <div className="d-flex justify-content-center mb-5 gap-2">
          <Button
            style={{ backgroundColor: "var(--primary)" }}
            className="border-0"
          >
            Featured
          </Button>
          <Button className="text-dark" variant="outline-success">
            For Sell
          </Button>
          <Button className="text-dark" variant="outline-success">
            For Rent
          </Button>
        </div>
      </section>
      <Row className="g-4 p-2">
        {lists.map((list, i) => {
          return (
            <Col
              key={i}
              lg={4}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="rounded overflow-hidden shadow-sm">
                <div className="position-relative overflow-hidden">
                  <Image
                    src={list.src}
                    alt={list.name}
                    className="img-fluid property-img"
                  />
                  <p
                    className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {i % 2 === 0 ? "For Sell" : "For Rent"}
                  </p>
                  <p className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    {list.name}
                  </p>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-success mb-3">$12,345</h5>
                  <p className="d-block h5 mb-2">Golden Urban House For Sell</p>
                  <p className="text-muted">
                    <FontAwesomeIcon
                      icon="location-dot"
                      className="me-1 text-success"
                    />
                    123 Street, New York, USA
                  </p>
                </div>
                <div
                  className="d-flex"
                  style={{ borderTop: "0.5px dashed var(--primary)" }}
                >
                  <small
                    className="flex-fill text-center py-2"
                    style={{ borderRight: "0.5px dashed var(--primary)" }}
                  >
                    1000 Sqrt
                  </small>
                  <small
                    className="flex-fill text-center py-2"
                    style={{ borderRight: "0.5px dashed var(--primary)" }}
                  >
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">2 Bath</small>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <section className="text-center mt-4 mb-5">
        <Button
          className="py-3 px-5 border-0"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Browse More Property
        </Button>
      </section>
      {location.pathname === "/property-list" && (
        <div className="my-3 my-md-5">
          <ContactAgent />
        </div>
      )}
    </>
  );
};
export default List;
