import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

// Styled components
const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 15px;
  z-index: 10;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  @media (min-width: 769px) {
    width: auto;
    max-width: 769px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    top: 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.a`
  font-size: 2rem;
  color: white;
  text-decoration: none;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(ScrollLink)`
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover,
  &.active {
    background-color: rgba(0, 123, 255, 0.2);
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerIcon = styled.img.attrs({
  src: "https://cdn-icons-png.flaticon.com/128/12314/12314153.png",
  alt: "Menu",
})`
  width: 30px;
  height: 30px;
`;

const CloseIcon = styled.img.attrs({
  src: "https://cdn-icons-png.flaticon.com/128/15058/15058877.png",
  alt: "Close",
})`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute; // Positioning the close icon absolutely to ensure it's clickable and visible
  top: 20px; // Distance from the top of the viewport
  right: 20px; // Distance from the right of the viewport
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.active {
    display: flex;
  }
`;

// Header component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "hero", text: "Ana Sayfa" },
    { href: "about", text: "Hakkımda" },
    { href: "education", text: "Eğitim" },
    { href: "skills", text: "Diller ve Araçlar" },
    { href: "projects", text: "Projeler" },
    { href: "contact", text: "İletişim" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo href="#">Hekim Aktaş</Logo>
        <Menu>
          {menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                href={"#" + item.href}
              >
                {item.text}
              </MenuItem>
            </li>
          ))}
        </Menu>
        <Hamburger onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? null : <HamburgerIcon />}
        </Hamburger>
        <MobileMenu className={isMobileMenuOpen ? "active" : ""}>
          <CloseIcon onClick={toggleMobileMenu} />
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMobileMenu}
            >
              {item.text}
            </MenuItem>
          ))}
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
