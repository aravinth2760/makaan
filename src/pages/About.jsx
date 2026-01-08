import Hero from "../components/Hero";
import Property from "../components/Property";
import ContactAgent from "../components/Contact-agent";
import Agent from "./property/Agent";

const About = () => {
  return (
    <>
      <Hero
        renderContent={() => (
          <>
            <h1 className="display-6 fw-bold mb-3">About Us</h1>
            <div className="d-flex gap-2 text-uppercase text-muted">
              <p style={{ color: "var(--primary)" }}>Home</p>
              <span>/</span>
              <p style={{ color: "var(--primary)" }}>pages</p>
              <span>/</span>
              <p>about</p>
            </div>
          </>
        )}
      />
      <Property />
      <ContactAgent />
      <Agent />
    </>
  );
};
export default About;
