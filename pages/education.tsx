import React from "react";
import styled, { keyframes } from "styled-components";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    
  }
`;
const roadAnimation = keyframes`
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;
const Wrapper = styled.div`
  margin: 20px;
`;
const EducationContainer = styled.section`
  padding: 5em 2em;
  background-color: #121212; // Dark theme background color
  color: #fff; // Text color
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto; // Centered
  overflow: hidden;
  position: relative;
  border: 2px solid #61dafb; // Light blue border
  border-radius: 25px; // Rounded corners
  box-shadow:
    0 0 15px rgba(97, 218, 251, 0.5),
    // Soft outer glow
    0 0 30px rgba(97, 218, 251, 0.3),
    // Additional depth
    inset 0 0 10px rgba(97, 218, 251, 0.2); // Inner glow for depth
  overflow: hidden;
`;

const Heading = styled.h2`
  font-size: 3em;
  margin-bottom: 4.5em;
  color: inherit;
  letter-spacing: 1px;
`;

const TimelineSVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Road = styled.rect`
  fill: #777;
`;

const RoadLines = styled.g`
  stroke: #fff;
  stroke-width: 4;
  stroke-dasharray: 15, 15;
  animation: ${roadAnimation} 1s linear infinite;
`;

const Entry = styled.div`
  display: flex;
  margin-bottom: 6em;
  flex-direction: column;
  z-index: 2;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

const DateText = styled.span`
  background-color: #2980b9;
  padding: 6px 22px;
  border-radius: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
`;

const Content = styled.div`
  background-color: #555;
  padding: 25px 35px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 1024px) {
    max-width: 60%;
    margin: 0 auto;
  }
`;

const educationData = [
  {
    institution: "MANISA CELAL BAYAR ÜNIVERSITESI",
    major: "Yazılım Mühendisliği - 2. Sınıf",
    description: [
      "Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2. sınıf öğrencisiyim.",
      "Bölümümde aldığım eğitimin yanı sıra, bireysel olarak da sürekli öğrenme ilkesiyle yeni teknolojileri, dilleri ve araçları öğrenmeye devam ediyorum.",
    ],
    date: "2022-",
  },
  {
    institution: "BURSA ULUDAĞ ÜNIVERSITESI",
    major: "Makine Mühendisliği",
    description: [
      "2021 ve 2022 yılları arasında Bursa Uludağ Üniversitesi'nde Makine Mühendisliği okuyordum.Sonra programlamayı ne kadar çok sevdiğimi ve bu konudaki yeteneklerimi fark ettim. Makine Mühendisliği derslerine ve Makine Mühendisliği konularına pek ilgim yoktu.",
      'Sonra ana dalımı "Yazılım Mühendisliği" olarak değiştirmeye karar verdim, okulumu değiştirdim ve Manisa Celal Bayar Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği Bölümü\'ne geçtim.',
    ],
    date: "2021-2022",
  },
];

const MyEducation: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <EducationContainer id="education">
          <Heading></Heading>
          <TimelineSVG viewBox="0 0 100 500">
            <Road x="25" y="0" width="50" height="500" />
            <RoadLines>
              {[...Array(26)].map((_, index) => (
                <line
                  key={index}
                  x1="50"
                  y1={index * 20}
                  x2="50"
                  y2={index * 20 + 15}
                />
              ))}
            </RoadLines>
          </TimelineSVG>

          {educationData.map((entry, index) => (
            <Entry key={index}>
              <Content>
                <h4>{entry.institution}</h4>
                <p>{entry.major}</p>
                {entry.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </Content>
              <DateContainer>
                <DateText>{entry.date}</DateText>
              </DateContainer>
            </Entry>
          ))}
        </EducationContainer>
      </Wrapper>
    </>
  );
};

export default MyEducation;
