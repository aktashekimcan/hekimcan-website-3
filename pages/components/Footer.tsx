// components/Footer.js
import styled from "styled-components";
// Sosyal medya ikonları için
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXTwitter as faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const FooterContainer = styled.footer`
  background-color: #121212; // Karanlık tema arka planı
  color: #fff;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #61dafb; // Vurgu rengi
    }
  }
`;

const CopyRightText = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <a
          href="https://github.com/hekimm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/hekimcanaktas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/hekimmcann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialMediaLinks>
      <CopyRightText>
        &copy; {new Date().getFullYear()} Hekim Aktaş. Tüm Hakları Saklıdır.
      </CopyRightText>
    </FooterContainer>
  );
};

export default Footer;
