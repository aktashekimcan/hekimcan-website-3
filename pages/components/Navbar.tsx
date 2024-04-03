import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  // `expanded` state'ini kontrol etmek için boolean tipinde bir değer kullanılıyor.
  const [expanded, setExpanded] = useState(false);

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
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container fluid>
        <NavbarBrand href="#">Hekim Aktaş</NavbarBrand>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Burada `expanded` değerinin tersini kullanarak doğru türde bir değer sağlıyoruz.
        />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item, index) => (
              <Nav.Item key={index}>
                <ScrollLink
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  href={"#" + item.href}
                  onClick={() => setExpanded(false)} // Menü öğesi tıklandığında navbar'ı kapat
                >
                  {item.text}
                </ScrollLink>
              </Nav.Item>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
