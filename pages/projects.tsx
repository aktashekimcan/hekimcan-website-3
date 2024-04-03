import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body {
   
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; // Daha okunabilir font
    
  }
`;
const Wrapper = styled.div`
  border: 2px solid #61dafb; // Light blue border
  border-radius: 25px; // Rounded corners
  box-shadow:
    0 0 15px rgba(97, 218, 251, 0.5),
    // Soft outer glow
    0 0 30px rgba(97, 218, 251, 0.3),
    // Additional depth
    inset 0 0 10px rgba(97, 218, 251, 0.2); // Inner glow for depth
  overflow: hidden;
  margin: 20px; // Add some padding to prevent content from touching the border
`;

const StyledCard = styled(Card)`
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #eaeaea; // Soft beyaz kart metni
  border: 2px solid pink; // Light blue border
  border-radius: 25px; // Rounded corners
  box-shadow:
    0 0 15px rgba(49, 31, 138, 0.5),
    // Soft outer glow
    0 0 30px rgba(49, 31, 138, 0.3),
    // Additional depth
    inset 0 0 10px rgba(49, 31, 138, 0.2); // Inner glow for depth
  overflow: hidden;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); // Hafif büyüme efekti
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); // Daha belirgin gölge
  }
`;

const ProjectTitle = styled.h5`
  color: #61dafb; // Açık mavi başlık rengi
  margin-top: 15px;
`;

const TechnologyList = styled.p`
  color: #ff79c6; // Canlı pembe metin rengi
  font-style: italic;
`;

const Title = styled.h1`
  color: #61dafb; // Açık mavi başlık rengi
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Projects: React.FC = () => {
  const projectList = [
    {
      name: "Kişisel Portfolyo Web Sitesi",
      technologies: "React,Next.js, CSS, Bootstrap",

      description:
        "Kişisel portfolyo web sitem, React-Next.js ile geliştirildi ve CSS ile Bootstrap kullanılarak stilize edildi. Bu proje, projelerimi ve teknik becerilerimi sergiliyor.",
    },
    {
      name: "E-Ticaret Platformu",
      technologies: "React, Redux, Styled Components",
      description:
        "React ve Redux kullanarak geliştirdiğim bu e-ticaret platformu, modern kullanıcı arayüzü tasarımları ve Styled Components ile özelleştirilmiş stil özellikleri içeriyor.",
    },
    {
      name: "Hava Durumu Uygulaması",
      technologies: "JavaScript, API, Bootstrap",
      description:
        "Bu hava durumu uygulaması, çeşitli API'larla entegre edilmiş ve JavaScript ile geliştirilmiştir. Bootstrap ile duyarlı tasarım özellikleri eklendi.",
    },
    {
      name: "Restoran QR Kodlu Menü Uygulaması",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Bu uygulama, restoranların müşterilerine dijital menü sunmasını sağlar. React ve Redux ile  kullanıcı arayüzü, Node.js ve Express ile güçlü bir sunucu tarafı, MongoDB ile veritabanı yönetimi kullanılır. Admin paneli üzerinden menü yönetimi yapılabilir ve güncellenebilir. Bu sayede müşteriler, masa üzerindeki QR kodu tarayarak güncel menüye hızlıca ulaşabilirler.",
    },
    {
      name: "GitHub Readme Generator",
      technologies: "Node.js, JavaScript",
      description:
        "GitHub projeleriniz için dinamik readme dosyaları oluşturan bir araç. Node.js kullanılarak geliştirildi ve GitHub API'siyle etkileşime geçiyor.",
    },
    {
      name: "Haber Uygulaması",
      technologies: "React, Node.js, Express, MongoDB, News API",
      description:
        "Kullanıcıların çeşitli haber kaynaklarından güncel haberleri okuyabileceği bir uygulama. React ile frontend, Node.js, Express, MongoDB ve News API ile backend geliştirildi.",
    },
    {
      name: "Emlak İlanları Uygulaması",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların emlak ilanlarını arayabileceği ve yayınlayabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
    {
      name: "Yemek Tarifleri Paylaşım Platformu",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların yemek tariflerini arayabileceği, paylaşabileceği ve yorumlayabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
    {
      name: "Film İnceleme ve Öneri Platformu",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların film incelemelerini okuyabileceği, kendi incelemelerini paylaşabileceği ve film önerileri alabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
  ];

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Container id="projects">
          <Title>Projelerim</Title>
          <Row>
            {projectList.map((project, index) => (
              <Col key={index} md={4}>
                <StyledCard>
                  <Card.Body>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <TechnologyList>{project.technologies}</TechnologyList>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default Projects;
