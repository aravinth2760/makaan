import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";

import Hero from "../components/Hero";

import client1 from "../assets/testimonial/testimonial-1.jpg";
import client2 from "../assets/testimonial/testimonial-2.jpg";
import client3 from "../assets/testimonial/testimonial-3.jpg";
import client4 from "../assets/testimonial/testimonial-4.jpg";

const Testimonial = () => {
  const location = useLocation();
  const clients = [client1, client2, client3, client4];
  return (
    <>
      {location.pathname === "/testimonial" && (
        <Hero
          renderContent={() => (
            <>
              <h1 className="display-6 fw-bold mb-3">Testimonial</h1>
              <div className="d-flex gap-2 text-uppercase text-muted">
                <p style={{ color: "var(--primary)" }}>Home</p>
                <span>/</span>
                <p style={{ color: "var(--primary)" }}>pages</p>
                <span>/</span>
                <p>Testimonial</p>
              </div>
            </>
          )}
        />
      )}

      <section className="text-center my-3 my-md-5">
        <h1 className="display-5 fw-bold mb-3">Our Clients Say!</h1>
        <p className="text-muted">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd <br />
          vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </section>

      <section className="p-2 p-md-4">
        <div
          style={{ backgroundColor: "var(--secondary)" }}
          className="p-2 p-md-4"
        >
          {clients.map((client) => {
            return (
              <div
                style={{ border: "0.8px dashed var(--primary)" }}
                className="bg-white p-4 my-3"
              >
                <p>
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd erat eos
                </p>
                <div className="d-flex gap-3">
                  <Image
                    src={client}
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div>
                    <p className="mb-0 fw-bold">Client Name</p>
                    <p className="mb-0">Profession</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Testimonial;
