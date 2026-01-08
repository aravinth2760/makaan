import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import member1 from "../../assets/team/team-1.jpg";
import member2 from "../../assets/team/team-2.jpg";
import member3 from "../../assets/team/team-3.jpg";
import member4 from "../../assets/team/team-4.jpg";

const Agent = () => {
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
    <section className="my-2 my-md-4 my-lg-5">
      <Row className="mb-3 mb-md-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1 className="display-5 fw-bold mb-3">Property Agents</h1>
          <p className="text-muted mb-4">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd <br /> vero ipsum sit eirmod sit. Ipsum diam justo sed
            rebum vero dolor duo.
          </p>
        </Col>
      </Row>
      <Row className="g-4 px-0 px-md-2 px-lg-4">
        {agents.map((agent, i) => {
          return (
            <>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
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
  );
};
export default Agent;
