import { Container } from "react-bootstrap";
import { useRoutes, HashRouter } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import List from './pages/property/List';
import Type from './pages/property/Type';
import Agent from './pages/property/Agent';
import Testimonial from "./pages/Testimonial";
import Error from "./pages/404";
import Contact from "./pages/Contact";
import AppNavbar from "./components/Navbar";
import AppFooter from "./components/Footer";

function AppRoutes() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/property-list", element: <List /> },
    { path: "/property-type", element: <Type /> },
    { path: "/property-agent", element: <Agent /> },
    { path: "/testimonial", element: <Testimonial /> },
    { path: "/404", element: <Error /> },
    { path: "/contact", element: <Contact /> },
  ];
  return useRoutes(routes);
}

const App = () => {
  return (
    <Container fluid='lg' className='bg-white p-0'>
      <HashRouter>
        <AppNavbar />
        <AppRoutes />
        <AppFooter />
      </HashRouter>
    </Container>
  );
}

export default App;
