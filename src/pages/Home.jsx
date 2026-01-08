import Hero from "../components/Hero";
import Property from "../components/Property";
import Type from "./property/Type";
import Agent from "./property/Agent";
import ContactAgent from "../components/Contact-agent";
import List from "../pages/property/List";
import Testimonial from "../pages/Testimonial";

const Home = () => {
  return (
    <>
      <Hero
        renderContent={() => (
          <>
            <h1 className="display-6 fw-bold mb-3">
              Find A{" "}
              <span style={{ color: "var(--primary)" }}>Perfect Home</span> To{" "}
              <br /> Live With Your Family
            </h1>
            <p className="fw-light mb-3">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              <br /> Kasd rebum ipsum et diam justo clita et kasd rebum sea
              elitr.
            </p>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "var(--primary)", color: "white" }}
            >
              Get Started
            </button>
          </>
        )}
      />
      <Type />
      <Property />
      <List />
      <ContactAgent />
      <Agent />
      <Testimonial />
    </>
  );
};
export default Home;
