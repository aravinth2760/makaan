import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import ContactAgent from "../../components/Contact-agent";
import Hero from "../../components/Hero";

import member1 from "../../assets/team/team-1.jpg";
import member2 from "../../assets/team/team-2.jpg";
import member3 from "../../assets/team/team-3.jpg";
import member4 from "../../assets/team/team-4.jpg";

const Agent = () => {
  const location = useLocation();
  const agents = [
    {
      name: "Full Name",
      sub: "Designation",
      img: member1,
    },
    {
      name: "Full Name",
      sub: "Designation",
      img: member2,
    },
    {
      name: "Full Name",
      sub: "Designation",
      img: member3,
    },
    {
      name: "Full Name",
      sub: "Designation",
      img: member4,
    },
  ];

  const icons = ["facebook-f", "twitter", "instagram"];

  return (
    <>
      {location.pathname === "/property-agent" && (
        <Hero
          renderContent={() => (
            <>
              <h1 className="display-6 fw-bold mb-3">Property Agent</h1>
              <div className="d-flex gap-2 text-uppercase text-muted">
                <p style={{ color: "var(--primary)" }}>Home</p>
                <span>/</span>
                <p style={{ color: "var(--primary)" }}>pages</p>
                <span>/</span>
                <p>property agent</p>
              </div>
            </>
          )}
        />
      )}
      <section className="my-2 my-md-4 my-lg-5">
        <Row className="mb-3 mb-md-5">
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h1 className="display-5 fw-bold mb-3">Property Agents</h1>
            <p className="text-muted mb-4">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </Col>
        </Row>
        <Row className="g-4 px-0 px-md-2 px-lg-4">
          {agents.map((agent, i) => {
            return (
              <>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp sm-only"
                  data-wow-delay="0.1"
                >
                  <div className="team-item rounded overflow-hidden shadow-sm">
                    <div className="position-relative">
                      <Image
                        src={agent.img}
                        alt={agent.name}
                        className="img-fluid"
                      />
                      <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                        {icons.map((icon, index) => {
                          return (
                            <>
                              <FontAwesomeIcon
                                icon={["fab", icon]}
                                className="mx-1 rounded-circle border shadow"
                                style={{
                                  color: "var(--primary)",
                                  backgroundColor: "#ffffff",
                                  padding: "12px",
                                }}
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-center p-4 mt-3">
                      <h5>{agent.name}</h5>
                      <small>{agent.sub}</small>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Row>
      </section>
      {location.pathname === "/property-agent" && (
        <div className="my-5">
          <ContactAgent />
        </div>
      )}
    </>
  );
};
export default Agent;
