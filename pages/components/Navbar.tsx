// pages/_app.tsx veya components/Header.tsx gibi uygun bir dosya

import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
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

const MobileNavToggle = styled.button`
  display: none; // Başlangıçta butonu gizle
  position: fixed;
  right: 15px;
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

const NavItem = styled.li`
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

  ${commonTransition};
`;

// Header Component
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <MobileNavToggle onClick={() => setIsNavOpen(!isNavOpen)}>
        <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
      </MobileNavToggle>
      <HeaderContainer isOpen={isNavOpen} id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <ProfileImage
              src="https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-6/273499217_4790860821004008_555242861065204042_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a8TiNCxXsr0AX9BKryh&_nc_ht=scontent.fesb7-1.fna&oh=00_AfAdLddhWmJ5V-lWj2ZGz1TPHUdgKiexi-0HPAyn0lFEdQ&oe=65EE101D"
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
              <NavItem>
                <Link href="/" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Ana Sayfa</span>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Hakkımda</span>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/education" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>Eğitim</span>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/skills" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faCode} />
                    <span>Diller ve Araçlar</span>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/projects" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    <span>Projeler</span>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact" passHref>
                  <span className="nav-link" onClick={closeNav}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>İletişim</span>
                  </span>
                </Link>
              </NavItem>
            </NavList>
          </nav>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
