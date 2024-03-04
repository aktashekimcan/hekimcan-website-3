import React, { useState, useEffect, FC } from "react";
import styled, { keyframes } from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0f0f0f;
  font-family: "Arial", sans-serif;
  color: #00ff00;
`;

const RandomText = styled.p`
  font-size: 48px;
  color: #00ff00;
`;

const ProgressText = styled.p`
  margin-top: 20px;
  font-size: 30px;
  color: #00ff00;
  font-weight: bold;
`;

const WelcomeText = styled.h1`
  font-size: 80px;
  color: #00ff00;
  text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.7);
  @media (max-width: 1024px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const appearAndScale = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimatedWelcomeText = styled(WelcomeText)`
  animation: ${appearAndScale} 1s ease-in-out;
`;

const Preloader: FC = () => {
  const [text, setText] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [welcome, setWelcome] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        Array.from({ length: 10 }, () =>
          Math.random() > 0.5 ? "1" : "0",
        ).join(""),
      );
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 50);

    setTimeout(() => {
      setWelcome(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      {!welcome ? (
        <>
          <RandomText>{text}</RandomText>
          <ProgressText>%{progress}</ProgressText>
        </>
      ) : (
        <AnimatedWelcomeText>Hoş Geldiniz</AnimatedWelcomeText>
      )}
    </LoadingContainer>
  );
};

export default Preloader;
