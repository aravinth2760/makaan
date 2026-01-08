import "../../styles/property-type.css";

import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Hero from "../../components/Hero";

import apartment from "../../assets/icon/property_type/icon-apartment.png";
import villa from "../../assets/icon/property_type/icon-villa.png";
import home from "../../assets/icon/property_type/icon-house.png";
import office from "../../assets/icon/property_type/icon-housing.png";
import building from "../../assets/icon/property_type/icon-building.png";
import house from "../../assets/icon/property_type/icon-neighborhood.png";
import shop from "../../assets/icon/property_type/icon-condominium.png";
import garage from "../../assets/icon/property_type/icon-luxury.png";

const Type = () => {
  const location = useLocation();
  const types = [
    { name: "apartment", src: apartment },
    { name: "villa", src: villa },
    { name: "home", src: home },
    { name: "office", src: office },
    { name: "building", src: building },
    { name: "townhouse", src: house },
    { name: "shop", src: shop },
    { name: "garage", src: garage },
  ];

  return (
    <>
      {location.pathname === "/property-type" && (
        <Hero
          renderContent={() => (
            <>
              <h1 className="display-6 fw-bold mb-3">Property Type</h1>
              <div className="d-flex gap-2 text-uppercase text-muted">
                <p style={{ color: "var(--primary)" }}>Home</p>
                <span>/</span>
                <p style={{ color: "var(--primary)" }}>pages</p>
                <span>/</span>
                <p>property type</p>
              </div>
            </>
          )}
        />
      )}

      <section className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="fw-bold">Property Types</h1>
        <p className="text-center  text-muted mt-3">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam justo sed
          rebum vero dolor duo.
        </p>
      </section>

      <section className="bg-transparent p-5">
        <Row>
          {types.map((type) => (
            <Col
              key={type}
              xs={12}
              sm={6}
              md={3}
              className="property-type-card"
            >
              <div
                className="p-4 text-center rounded-3"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <div className="mb-3">
                  <img src={type.src} alt={type.name} />
                </div>
                <h5 className="mb-1">{type.name}</h5>
                <span className="text-success">123 Properties</span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};
export default Type;
