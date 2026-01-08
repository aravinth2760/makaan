import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";

const Error = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => navigate("/");
  return (
    <>
      <Hero
        renderContent={() => (
          <>
            <h1 className="display-6 fw-bold mb-3">404 Error</h1>
            <div className="d-flex gap-2 text-uppercase text-muted">
              <p style={{ color: "var(--primary)" }}>Home</p>
              <span>/</span>
              <p style={{ color: "var(--primary)" }}>pages</p>
              <span>/</span>
              <p>404 error</p>
            </div>
          </>
        )}
      />
      <section className="my-5 text-center">
        <FontAwesomeIcon
          icon="fa-triangle-exclamation"
          color="var(--primary)"
          size="4x"
        />
        <h1 className="display-2 fw-bold mt-4 mb-0">404</h1>
        <h1 className="fw-semibold display-6 m-0">Page Not Found</h1>
        <p className="fw-lighter my-3">
          We’re sorry, the page you have looked for does not exist in our
          website!
          <br /> Maybe go to our home page or try to use a search?
        </p>
        <Button
          style={{ backgroundColor: "var(--primary)" }}
          className="border-0 px-5 py-4 my-3"
          onClick={handleViewDetails}
        >
          Go Back To Home
        </Button>
      </section>
    </>
  );
};
export default Error;
