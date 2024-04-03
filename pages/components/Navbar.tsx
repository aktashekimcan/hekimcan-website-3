import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  const menuItems = [
    { href: "hero", text: "Ana Sayfa" },
    { href: "featured-projects", text: "Öne Çıkan Projelerim" },
    { href: "about", text: "Hakkımda" },
    { href: "education", text: "Eğitim" },
    { href: "skills", text: "Diller ve Araçlar" },
    { href: "projects", text: "Projeler" },
    { href: "contact", text: "İletişim" },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Hekim Aktaş</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={ScrollLink}
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ana Sayfa
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="featured-projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Öne Çıkan Projelerim
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hakkımda
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Eğitim
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Diller ve Araçlar
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projeler
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
