// components/Navbar.js
import Link from "next/link";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledBootstrapNavbar = styled(BootstrapNavbar)`
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const NavbarBrandStyled = styled(BootstrapNavbar.Brand)`
  /* Stil seçenekleri */
`;

const StyledNav = styled(Nav)`
  margin-left: auto;

  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

const Navbar = () => {
  return (
    <StyledBootstrapNavbar expand="lg" variant="dark" sticky="top">
      <Container>
        <NavbarBrandStyled href="/">
          {/* Logo eklenebilir */}
          {/* <img src="/path/to/logo.png" alt="Logo" style={{ marginRight: '10px', width: '40px' }}/> */}
          Hekim Aktaş
        </NavbarBrandStyled>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <StyledNav>
            <Link href="/" passHref>
              <Nav.Link as="a">Ana Sayfa</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link as="a">Hakkımda</Nav.Link>
            </Link>
            <Link href="/education" passHref>
              <Nav.Link as="a">Eğitim</Nav.Link>
            </Link>
            <Link href="/skills" passHref>
              <Nav.Link as="a">Diller ve Araçlar</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link as="a">Projeler</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link as="a">İletişim</Nav.Link>
            </Link>
          </StyledNav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledBootstrapNavbar>
  );
};

export default Navbar;
