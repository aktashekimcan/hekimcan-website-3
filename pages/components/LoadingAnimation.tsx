import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0f0f0f;
  font-family: "Arial", sans-serif;
  color: #00ff00;
`;

const MatrixEffect = styled.div`
  font-family: "Courier New", monospace;
  font-size: 48px;
  letter-spacing: 0; // Azaltılmış harf aralığı
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: center;
  display: ${(props) => (props.hide ? "none" : "block")}; // Görünürlük kontrolü
`;

const ProgressText = styled.p`
  font-size: 24px;
  color: #00ff00;
  font-weight: bold;
  margin-top: 20px;
  display: ${(props) => (props.hide ? "none" : "block")}; // Görünürlük kontrolü
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const WelcomeText = styled.h1`
  opacity: 0;
  animation: ${appear} 2s ease-in-out forwards;
  animation-delay: 1s;
  color: #00ff00;
  font-size: 3rem;
  text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.7);
  margin-top: 20px;
`;

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => (oldProgress < 100 ? oldProgress + 1 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const generateMatrixEffect = () => {
    return (
      <span>
        {Array.from({ length: 16 }, () =>
          // Karakter sayısını 16'ya çıkar
          Math.random() > 0.5 ? "1" : "0",
        ).join("")}
      </span>
    );
  };

  return (
    <LoaderContainer>
      <MatrixEffect hide={progress === 100}>
        {generateMatrixEffect()}
      </MatrixEffect>
      <ProgressText hide={progress === 100}>%{progress}</ProgressText>
      {progress === 100 && (
        <WelcomeText>Hoş Geldiniz,ben Hekim AKTAŞ</WelcomeText>
      )}
    </LoaderContainer>
  );
};

export default Loader;
