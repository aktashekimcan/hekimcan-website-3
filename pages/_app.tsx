import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Loader from "./components/LoadingAnimation";
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faHome } from "@fortawesome/free-solid-svg-icons";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%; // Ensures that the body and html tags take up the full viewport height
  }
  
  #__next {
    height: 100%; // Ensures that the Next.js root div also takes up the full viewport height
  }
`;

const rgbAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const GlobalStyle = createGlobalStyle`

  .scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    font-size: 2rem;
    z-index: 1000;
    border: none;
   background: linear-gradient(90deg, cyan, magenta, yellow, cyan);
    background-size: 400% 400%;
    border-radius: 50%; /* Make it circular */
    animation: ${rgbAnimation} 4s linear infinite;
    cursor: pointer;
    transition: transform 0.2s ease-out, background-color 0.2s;
    color: #000; /* Beyaz metin rengi */
    box-shadow: 0 2px 5px rgba(0,0,0,0.3); /* Gölge efekti */

    &:hover {
      transform: scale(1.1); /* Hover durumunda büyüt */
      background-color: #0056b3; /* Hover durumunda daha koyu mavi */
    }
  }
   @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

const GlobalBackground = () => (
  <>
    <GlobalStyles />
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <Stars
        radius={100} // Control the radius of the star sphere
        depth={50} // Control the depth (layering) of stars
        count={5000} // Number of stars
        factor={4} // Star size factor
        saturation={0} // Saturation of the stars' color
        fade={true} // Stars fade in and out
      />
    </Canvas>
  </>
);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false); // Scroll Top Button gösterim durumu

  const router = useRouter();

  useEffect(() => {
    // Sadece ana sayfada ve ilk yüklemede yükleyiciyi göster
    if (router.pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 8000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleResize = () => {
      // If the window is wider than 768px, open the sidebar by default
      if (window.innerWidth > 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTopButton && window.pageYOffset > 400) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.pageYOffset <= 400) {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTopButton]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalBackground />
      <Head>
        <title>Hekim Aktaş - Software Developer Portfolio</title>
        <meta
          name="description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />
        <meta
          name="keywords"
          content="Hekim Aktaş, Software Developer, Web Developer, Portfolio"
        />
        <meta name="author" content="Hekim Aktaş" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hekim Aktaş - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />

        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />
        <meta property="og:url" content="https://www.hekimaktas.com" />

        <meta
          name="twitter:card"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />
        <meta name="twitter:creator" content="@hekimmcann" />
        <meta
          name="twitter:title"
          content="Hekim Aktaş - Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Component {...pageProps} />
          <Footer />

          {showScrollTopButton && (
            <button onClick={scrollTop} className="scroll-top-button">
              ⬆︎
            </button>
          )}
        </>
      )}
    </>
  );
}

export default MyApp;
