import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
const video1Url = "/videos/video-1.mp4";
const video2Url = "/videos/video-2.mp4";
const video3Url = "/videos/video-4.mp4"; // Assuming you have this file in your public/videos folder
const video4Url = "/videos/video-3.mp4"; // Assuming you have this file in your public/videos folder
const backgroundImageUrl =
  "https://media.licdn.com/dms/image/D4D16AQF1QKld3LUC0Q/profile-displaybackgroundimage-shrink_350_1400/0/1697048712098?e=1715212800&v=beta&t=u-D9xP9LHWyNdCXJ7wKN2c6bovxOgqyvw1xVtq-UWM4";

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
  background-color: #1a1a1a; // Dark arka plan rengi
  text-align: center;

  h2 {
    display: inline-block;
    font-size: 2.5rem;
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
      animation: ${underlineAnimation} 1s ease forwards; // Animasyon süresini 1 saniyeye çıkardık
      animation-delay: 3s; // Animasyonun başlaması için gecikmeyi 3 saniyeye çıkardık
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
    background-color: #333;
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
const ScrollButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #149ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f5c55;
  }
`;
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
    const typed = new Typed(".typed", {
      strings: [
        "Hekim Aktaş",
        "Yazılım Mühendisi",
        "Jr.Full Stack Web Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Öne Çıkan Projelerime gitmek için smooth scroll fonksiyonu
  const scrollToFeaturedProjects = () => {
    document
      .getElementById("featuredProjects")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection id="hero">
        <div className="hero-container" data-aos="fade-in">
          <h1>Hekim Aktaş</h1>
          <p>
            Ben <span className="typed"></span>
          </p>
          <ScrollButton onClick={scrollToFeaturedProjects}>
            Öne Çıkan Projelerime Git
          </ScrollButton>
        </div>
      </HeroSection>
      <div id="featured-projects">
        <FeaturedProjects />
      </div>
    </>
  );
};
export default Hero;
