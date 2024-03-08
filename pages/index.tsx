import React, { useEffect } from "react";
import styled from "styled-components";
import Typed from "typed.js";
const backgroundImageUrl =
  "https://media.licdn.com/dms/image/D4D16AQF1QKld3LUC0Q/profile-displaybackgroundimage-shrink_350_1400/0/1697048712098?e=1715212800&v=beta&t=u-D9xP9LHWyNdCXJ7wKN2c6bovxOgqyvw1xVtq-UWM4"; // Burada resminizin URL'sini belirleyin

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImageUrl}) top center;
  background-size: contain;
  position: relative;

  &:before {
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .hero-container {
    position: relative;
    z-index: 2;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 36px;
    }
  }

  p {
    color: #fff;
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;

    span {
      color: #fff;
      padding-bottom: 4px;
      letter-spacing: 1px;
      border-bottom: 3px solid #149ddd;
    }
  }

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }
`;

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["Hekim Aktaş","Yazılım Mühendisliği Öğrencisi", "Jr.Full Stack Web Developer", "Jr.Data Scientist"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HeroSection id="hero">
      <div className="hero-container" data-aos="fade-in">
        <h1>Hekim Aktaş</h1>
        <p>
          Ben <span className="typed"></span>
        </p>
      </div>
    </HeroSection>
  );
};

export default Hero;
