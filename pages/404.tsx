// pages/404.tsx
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #121212;
  color: #61dafb;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem; // Daha büyük başlık
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px #000; // Metin gölgesi
`;

const NotFoundText = styled.p`
  font-size: 1.8rem; // Daha büyük metin
  margin-bottom: 30px;
  text-align: center;
  max-width: 600px; // Metin genişliği sınırlaması
`;

const StyledButton = styled.button`
  background-color: #61dafb; // Buton arka plan rengi
  color: #121212; // Buton metin rengi
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #4a99d3; // Hover arka plan rengi
    color: white; // Hover metin rengi
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Sayfa Bulunamadı</NotFoundTitle>
      <NotFoundText>Aradığınız sayfa mevcut değil.</NotFoundText>
      <Link href="/" passHref>
        <StyledButton>Ana Sayfaya Dön</StyledButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
