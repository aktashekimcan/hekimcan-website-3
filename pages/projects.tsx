import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000; // Siyah arka plan
    color: #fff; // Beyaz metin
  }
`;

const StyledCard = styled(Card)`
  margin: 20px;
  background-color: #121212; // Koyu kart arka planı
  color: #fff; // Beyaz kart metni
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectTitle = styled.h5`
  color: #61dafb; // Açık mavi başlık rengi
  margin-top: 15px;
`;

const TechnologyList = styled.p`
  color: #61dafb; // Açık mavi metin rengi
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
      image: "https://via.placeholder.com/150",
      name: "Kişisel Portfolyo Web Sitesi",
      technologies: "React.Redux, CSS, Bootstrap",
      description:
        "Kişisel portfolyo web sitem, React ile geliştirildi ve CSS ile Bootstrap kullanılarak stilize edildi. Bu proje, projelerimi ve teknik becerilerimi sergiliyor.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "E-Ticaret Platformu",
      technologies: "React, Redux, Styled Components",
      description:
        "React ve Redux kullanarak geliştirdiğim bu e-ticaret platformu, modern kullanıcı arayüzü tasarımları ve Styled Components ile özelleştirilmiş stil özellikleri içeriyor.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Hava Durumu Uygulaması",
      technologies: "JavaScript, API, Bootstrap",
      description:
        "Bu hava durumu uygulaması, çeşitli API'larla entegre edilmiş ve JavaScript ile geliştirilmiştir. Bootstrap ile duyarlı tasarım özellikleri eklendi.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Restoran QR Kodlu Menü Uygulaması",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Bu uygulama, restoranların müşterilerine dijital menü sunmasını sağlar. React ve Redux ile  kullanıcı arayüzü, Node.js ve Express ile güçlü bir sunucu tarafı, MongoDB ile veritabanı yönetimi kullanılır. Admin paneli üzerinden menü yönetimi yapılabilir ve güncellenebilir. Bu sayede müşteriler, masa üzerindeki QR kodu tarayarak güncel menüye hızlıca ulaşabilirler.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "GitHub Readme Generator",
      technologies: "Node.js, JavaScript",
      description:
        "GitHub projeleriniz için dinamik readme dosyaları oluşturan bir araç. Node.js kullanılarak geliştirildi ve GitHub API'siyle etkileşime geçiyor.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Haber Uygulaması",
      technologies: "React, Node.js, Express, MongoDB, News API",
      description:
        "Kullanıcıların çeşitli haber kaynaklarından güncel haberleri okuyabileceği bir uygulama. React ile frontend, Node.js, Express, MongoDB ve News API ile backend geliştirildi.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Emlak İlanları Uygulaması",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların emlak ilanlarını arayabileceği ve yayınlayabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Yemek Tarifleri Paylaşım Platformu",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların yemek tariflerini arayabileceği, paylaşabileceği ve yorumlayabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Film İnceleme ve Öneri Platformu",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      description:
        "Kullanıcıların film incelemelerini okuyabileceği, kendi incelemelerini paylaşabileceği ve film önerileri alabileceği bir platform. React ve Redux ile frontend, Node.js, Express ve MongoDB ile backend geliştirildi.",
    },
    // Diğer proje nesneleri burada yer alacak...
    // ...
  ];

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Projelerim</title>
        <meta name="description" content="Benim projelerim" />
      </Head>
      <Container>
        <Title>Projelerim</Title>
        <Row>
          {projectList.map((project, index) => (
            <Col key={index} md={4}>
              <StyledCard>
                <ProjectImage src={project.image} alt={project.name} />
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
    </>
  );
};

export default Projects;
