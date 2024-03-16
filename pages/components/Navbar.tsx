import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { SidebarContext } from "../_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faGraduationCap,
  faCode,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter as faTwitter,
  faFacebook,
  faInstagram,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const commonTransition = css`
  transition: all 0.3s ease;
`;
interface SidebarToggleButtonProps {
  isOpen: boolean;
}

const calculateHoverTextPosition = (isOpen) => {
  return isOpen ? "50%" : "calc(50% + 30px)"; // Adjust '20px' to move it to the right
};
const VerticalBarIcon = styled.div`
  height: 24px;
  width: 4px; // Increased width for a thicker line
  background-color: #ccc; // Grey color
  position: absolute;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
`;
const SidebarToggleButton = styled.button`
  display: none; // Start by hiding the button
  position: fixed;
  right: 200px;
  top: calc(50% - 20px); // Position the button from the top
  z-index: 9999;
  border: none;
  background: transparent;
  font-size: 24px;
  right: ${(props) => (props.isOpen ? "1180px" : "1480px")};

  color: #ccc;
  cursor: pointer;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    // Show the button only on screens wider than 768px
    display: flex;
  }

  &:hover {
    // This will change the icon color to black on hover
    color: #000;
  }

  // This will show the right-chevron when the sidebar is open and the left-chevron when it's closed.
  // It defaults to the bar icon when not hovered.
  .icon-default {
    display: block;
  }

  .icon-hover {
    display: none;
  }

  &:hover .icon-default {
    display: none;
  }

  &:hover .icon-hover {
    display: block;
  }

  .hover-text {
    display: block; // Make sure the text is always displayed
    position: absolute;
    bottom: 100%; // Position it above the button
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; // Keep the text on one line
    padding: 8px;
    font-size: 14px;
    background-color: #000; // Background color of the text
    color: #fff; // Text color
    border-radius: 10px; // Rounded corners
    z-index: 10; // Make sure it's above other elements
    left: ${(props) => calculateHoverTextPosition(props.isOpen)};

    // Hide the text initially
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  &:hover .hover-text {
    opacity: 1; // Show the text on hover
    visibility: visible; // Make it visible on hover
  }

  ${commonTransition};
  @media (min-width: 768px) and (max-width: 1224px) {
    display: flex;
    right: ${(props) =>
      props.isOpen ? "calc(100vw - 350px)" : "calc(100vw - 50px)"};
  }

  // 1224px ve üzeri ekran genişliklerinde butonu göster
  @media (min-width: 1224px) {
    display: flex;
    right: ${(props) =>
      props.isOpen ? "calc(100vw - 350px)" : "calc(100vw - 50px)"};
  }
`;
const MobileNavToggle = styled.button`
  display: none; // Başlangıçta butonu gizle
  position: fixed;
  right: 15px; // Stay on the top right
  top: 15px;
  z-index: 9999;
  border: none;
  background: #149ddd;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    // 768px altında butonu göster
    display: flex;
  }

  ${commonTransition};
`;
interface HeaderContainerProps {
  isOpen: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 9997;
  padding: 0 15px;
  background: #040b14;
  overflow-y: auto;
  box-shadow: ${(props) =>
    props.isOpen ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};

  @media (max-width: 768px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    width: 80%;
  }

  @media (min-width: 769px) {
    transform: translateX(
      ${(props) => (props.isOpen ? "0" : "-300px")}
    ); // Adjust the "300px" based on your sidebar width
  }

  ${commonTransition};
`;

const ProfileImage = styled.img`
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileName = styled.h1`
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-align-last: center;
  font-family: "Poppins", sans-serif;
  a,
  a:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const SocialLink = styled.a`
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  &:hover {
    background: #149ddd;
    color: #fff;
    text-decoration: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface NavItemProps {
  isActive: boolean;
}

const NavItem = styled.li<NavItemProps>`
  a {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: 8px;
    margin: 5px 0;
    text-decoration: none;

    &:hover,
    &.active {
      background-color: #149ddd;
      color: #fff;
      text-decoration: none;
    }

    svg {
      margin-right: 10px;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      a {
        background-color: #149ddd;
        color: #fff;
      }
    `}

  ${commonTransition};
`;

// Header Component
const Header = () => {
  const { isNavOpen, setIsNavOpen } = useContext(SidebarContext);
  const [hover, setHover] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };
  const [hoverText, setHoverText] = useState("");

  const router = useRouter();
  const menuItems = [
    { href: "/", icon: faHome, text: "Ana Sayfa" },
    { href: "/about", icon: faUser, text: "Hakkımda" },
    { href: "/education", icon: faGraduationCap, text: "Eğitim" },
    { href: "/skills", icon: faCode, text: "Diller ve Araçlar" },
    { href: "/projects", icon: faProjectDiagram, text: "Projeler" },
    { href: "/contact", icon: faEnvelope, text: "İletişim" },
    // Diğer menü öğeleri buraya eklenebilir
  ];
  return (
    <>
      <MobileNavToggle onClick={() => setIsNavOpen(!isNavOpen)}>
        <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
      </MobileNavToggle>

      <HeaderContainer isOpen={isNavOpen} id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <ProfileImage
              src="https://media.licdn.com/dms/image/D4E03AQGXmGkqP3kSGA/profile-displayphoto-shrink_200_200/0/1709712082289?e=1715817600&v=beta&t=A6r4LPpny0aFSEKi4n0APCmQeQNYJgaVjinCUm5eqkY"
              alt=""
              className="img-fluid rounded-circle"
            />
            <ProfileName>
              <a href="index.html">Hekim Aktaş</a>
            </ProfileName>
            <div className="social-links mt-3 text-center">
              <SocialLink href="#" className="twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="#" className="facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </SocialLink>
              <SocialLink href="#" className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>

              <SocialLink href="#" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialLink>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <NavList>
              {menuItems.map((item, index) => (
                <NavItem key={index} isActive={router.pathname === item.href}>
                  <Link href={item.href} passHref>
                    <span className="nav-link" onClick={closeNav}>
                      <FontAwesomeIcon icon={item.icon} />
                      <span>{item.text}</span>
                    </span>
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </nav>
        </div>
      </HeaderContainer>
      <SidebarToggleButton
        isOpen={isNavOpen}
        onClick={() => setIsNavOpen(!isNavOpen)}
        onMouseEnter={() =>
          setHoverText(isNavOpen ? "Menüyü kapat" : "Menüyü aç")
        }
        onMouseLeave={() => setHoverText("")}
      >
        <VerticalBarIcon className="icon-default" />
        <FontAwesomeIcon
          icon={isNavOpen ? faChevronLeft : faChevronRight}
          className="icon-hover"
        />
        {/* Add hover text spans */}
        <span className="hover-text">{hoverText}</span>
      </SidebarToggleButton>
    </>
  );
};

export default Header;
