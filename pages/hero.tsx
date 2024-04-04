import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
const random = require("maath/random/dist/maath-random.cjs");
import TypingAnimation from "./components/TypingAnimation"; // TypingAnimation bileşenini import et
const TechIconCard = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px; // Making it round as per your instructions, but you can adjust as needed
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: fit-content;
  height: fit-content;
  padding: 10px; // Adjust padding as needed
  display: inline-flex; // To keep it centered and inline
  justify-content: center;
  align-items: center;
`;
const TechIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const TechIcon = styled.img`
  height: 50px; // İkon boyutu
  width: 50px; // İkon genişliği
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); // Fare ile üzerine gelindiğinde büyüt
  }
`;

const video1Url = "/videos/video-1.mp4";
const video2Url = "/videos/video-2.mp4";
const video3Url = "/videos/video-4.mp4"; // Assuming you have this file in your public/videos folder
const video4Url = "/videos/video-3.mp4"; // Assuming you have this file in your public/videos folder
const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2; // İçeriği Canvas üzerine çıkarır
  pointer-events: none; // İçeriğin üzerindeki mouse event'lerini devre dışı bırakır
`;
const CodeCard = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: "Courier New", Courier, monospace;
  color: #fff;
  max-width: 80%;
  overflow: auto;
  white-space: pre-wrap;
`;
const StyledCanvas = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // Bu, canvas'ı içeriğin arkasına yerleştirir
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  z-index: 1;
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
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    z-index: 2; // İçeriği gece gökyüzü efektinin önüne getirir
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
    &.no-underline span {
      border-bottom: none; // Alt çizgiyi kaldır
    }
  }
`;
const dropAnimation = keyframes`
  0% { transform: translateY(-100px); opacity: 0; }
  80% { opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
`;

const underlineAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const FeaturedProjectsSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #000; // Dark arka plan rengi
  text-align: center;

  h2 {
    display: inline-block;
    font-size: 2.5rem; // Orjinal font boyutu
    margin-bottom: 2rem;
    color: #fff;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      background-color: #61dafb;
      animation: ${underlineAnimation} 1s ease forwards;
      animation-delay: 3s;
    }

    // Medya sorgusu ile küçük ekranlarda başlık için stil ayarlamaları
    @media (max-width: 768px) {
      font-size: 1.8rem; // Küçük ekranlar için font boyutunu azalt
      line-height: 2.2rem; // Satır yüksekliğini ayarla
      padding: 0 10px; // Sağdan ve soldan padding ekle
      box-sizing: border-box; // Padding boyutunu genel boyuta dahil et
    }
  }

  .letter {
    display: inline-block;
    opacity: 0;
    animation: ${dropAnimation} 0.5s ease forwards;
  }
  .videos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .video-wrapper {
    width: 100%;
    max-width: 500px;
    text-align: left;
  }

  .video-title {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  video {
    width: 100%;
    border-radius: 10px; // Kenar yuvarlaklığı
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); // Kutu gölgesi
    background: #000; // Video yüklenirken arka plan rengi
  }

  @media (min-width: 1024px) {
    .videos-container {
      justify-content: space-around;
    }

    .video-wrapper {
      width: 45%; // Büyük ekranlarda yan yana iki video
    }
  }
  .project-card {
    background-color: #121212;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 20px;
    // Genişlik sınırlama ve merkezleme için eklenen stiller
    width: 80%; // Genişliği sınırla
    max-width: 1100px; // Maksimum genişlik
    margin: 20px auto; // Üst-alt marjin ile merkezde
  }
`;

const NightSky = () => {
  return (
    <StyledCanvas>
      <ambientLight intensity={0.5} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </StyledCanvas>
  );
};

const AnimatedTitle = ({ text }: { text: string }) => {
  const letters = text.split("").map((char, index) =>
    char === " " ? (
      <span key={index} style={{ display: "inline-block", width: "0.5em" }}>
        &nbsp;
      </span>
    ) : (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${0.2 * index}s` }} // Her harfin animasyon gecikmesini 0.2 saniye artırdık
      >
        {char}
      </span>
    ),
  );

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && titleRef.current) {
          titleRef.current.style.animationPlayState = "running";
          titleRef.current.childNodes.forEach((child) => {
            // child HTMLElement türünde mi kontrol ediliyor
            if (child instanceof HTMLElement) {
              child.style.animationPlayState = "running";
            }
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <h2 ref={titleRef}>{letters}</h2>;
};
const FeaturedProjects = () => (
  <FeaturedProjectsSection id="featuredProjects">
    <AnimatedTitle text="Öne Çıkan Projelerim" />
    <div className="videos-container project-card">
      {/* Existing video wrappers */}
      <div className="video-wrapper ">
        <div className="video-title">Instagram Clone - Frontend Projesi</div>
        <video src={video1Url} controls autoPlay muted loop></video>
      </div>
      <div className="video-wrapper">
        <div className="video-title">Netflix Clone - Frontend Projesi</div>
        <video src={video2Url} controls autoPlay muted loop></video>
      </div>
      {/* New video wrappers */}
      <div className="video-wrapper">
        <div className="video-title">2D Futbol Oyunu Projesi - Python</div>
        <video src={video3Url} controls autoPlay muted loop></video>
      </div>
      <div className="video-wrapper">
        <div className="video-title">
          QR Code Menu Projesi - Frontend Projesi
        </div>
        <video src={video4Url} controls autoPlay muted loop></video>
      </div>
    </div>
  </FeaturedProjectsSection>
);

const Hero = () => {
  useEffect(() => {
    // İlk Typed.js animasyonu (Hekim Aktaş yazısı için)
    new Typed(".typed", {
      strings: [
        "Hekim Aktaş",
        "Yazılım Mühendisi",
        "Jr.Frontend Web Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }, []);

  return (
    <>
      <HeroSection id="hero">
        <StyledCanvas>
          <ambientLight intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade={true}
          />
        </StyledCanvas>
        <HeroContent>
          <h1>Hekim Aktaş</h1>
          <p>
            Ben <span className="typed"></span>
          </p>
          <TypingAnimation />

          <TechIconsContainer>
            {/* Her teknoloji için bir TechIcon etiketi ekleyin. src'de doğru yolu kullanın. */}
            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React.js"
            />
            <TechIconCard>
              <TechIcon
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="Next.js"
              />
            </TechIconCard>

            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="Redux"
            />
            <TechIcon
              src="https://angular.io/assets/images/logos/angular/angular.svg"
              alt="Angular"
            />
            <TechIcon
              src="https://ngrx.io/assets/images/badge.svg"
              alt="NgRx"
            />
            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="Vue.js"
            />
            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Node.js"
            />
            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
            />
            <TechIcon
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="Express.js"
            />
          </TechIconsContainer>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default Hero;
