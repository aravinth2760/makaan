import "../styles/navbar.css";

import { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import IconDeal from "../assets/icon/icon-deal.png";

const AppNavbar = () => {
  const location = useLocation();
  const [propertyShow, setPropertyShow] = useState(false);
  const [pagesShow, setPagesShow] = useState(false);
  return (
    <Container fluid="lg" className="nav-bar bg-transparent p-0 px-lg-4">
      <Navbar
        className="bg-white navbar-light shadow nav px-4 py-0"
        expand="lg"
      >
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img src={IconDeal} alt="Icon Deal" className="img-fluid" />
          </div>
          <h1 className="m-0 fw-bold" style={{ color: "var(--primary)" }}>
            Makaan
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" active={location.pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Item>
              <Dropdown
                show={propertyShow}
                onMouseEnter={() => setPropertyShow(true)}
                onMouseLeave={() => setPropertyShow(false)}
                className="nav-item"
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="nav-link"
                  active={
                    location.pathname === "/property-list" ||
                    location.pathname === "/property-type" ||
                    location.pathname === "/property-agent"
                  }
                >
                  Property
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="/property-list"
                    active={location.pathname === "/property-list"}
                  >
                    Property List
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/property-type"
                    active={location.pathname === "/property-type"}
                  >
                    Property Type
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/property-agent"
                    active={location.pathname === "/property-agent"}
                  >
                    Property Agent
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Dropdown
                show={pagesShow}
                onMouseEnter={() => setPagesShow(true)}
                onMouseLeave={() => setPagesShow(false)}
                className="nav-item"
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="nav-link"
                  active={
                    location.pathname === "/testimonial" ||
                    location.pathname === "/404"
                  }
                >
                  Pages
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="/testimonial"
                    active={location.pathname === "/testimonial"}
                  >
                    Testimonials
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/404"
                    active={location.pathname === "/404"}
                  >
                    404 Error
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Link href="/contact" active={location.pathname === "/contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default AppNavbar;
