import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const GeneralContainerCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3); // Genel arka plan rengi
  border-radius: 25px; // Yumuşatılmış köşeler
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); // Belirgin bir gölge
  padding: 20px; // İç boşluk
  margin: 20px 0; // Üst ve alt marjin
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const ProjectCard = styled.div`
  width: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProjectInfo = styled.div`
  padding: 15px;
`;

const ProjectTitle = styled.h5`
  color: #fff.s;
  margin-bottom: 10px;
`;

const ProjectTechnologies = styled.div`
  margin-bottom: 15px;
`;

const TechnologyTag = styled.span`
  display: inline-block;
  background-color: #61dafb;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkIcon = styled.a`
  color: #61dafb;
  font-size: 24px;

  &:hover {
    color: #0056b3;
  }
`;
const projects = [
  {
    name: "KFC Landing Page",
    technologies: ["#React", "#Next.js", "#StyledComponents"],
    liveLink: "https://kfc-landing-page-project.vercel.app/",
    githubLink: "https://github.com",
    imageUrl: "https://i.hizliresim.com/dq1uncl.png",
  },
  {
    name: "Netflix Clone",
    technologies: ["#React", "#Bootstrap", "#StyledComponents"],
    liveLink: "https://netflix-clone-project-lime.vercel.app/",
    githubLink: "https://github.com",
    imageUrl: "https://i.hizliresim.com/fi1i4fq.png",
  },
  {
    name: "Portfolio Website",
    technologies: ["#React", "#Next.js", "#StyledComponents"],
    liveLink: "hekimaktas.com",
    githubLink: "https://github.com",
    imageUrl: "https://i.hizliresim.com/7wvq9c1.png",
  },
  {
    name: "Qr Code Restaurant Menu",
    technologies: ["#React", "#Next.js", "#StyledComponents"],
    liveLink: "https://qr-code-restaurant-menu.vercel.app/",
    githubLink: "https://github.com",
    imageUrl: "https://i.hizliresim.com/pwfq24u.png",
  },
  {
    name: "Code Editor that compiles HTM-CSS-JS",
    technologies: ["#React", "#Next.js", "#StyledComponents","#ReactContextAPI"],
    liveLink: "https://code-editor-aktashekimcans-projects.vercel.app/",
    githubLink: "https://github.com",
    imageUrl: "https://i.ibb.co/Cz78BJ2/Screenshot-2024-04-05-215627.png",
  },
    {
    name: "React Tutorial Page",
    technologies: ["#React", "#Bootstrap", "#StyledComponents"],
    liveLink: "https://react-tutorial-aktashekimcans-projects.vercel.app/",
    githubLink: "https://github.com",
    imageUrl: "https://i.ibb.co/X3fq2Ph/Screenshot-2024-04-08-004226.png",
  },
];

const SoftwareDeveloperPortfolioProjects = () => (
  <GeneralContainerCard>
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.imageUrl} alt={project.name} />
          <ProjectInfo>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectTechnologies>
              {project.technologies.map((tech, index) => (
                <TechnologyTag key={index}>{tech}</TechnologyTag>
              ))}
            </ProjectTechnologies>
            <ProjectLinks>
              <LinkIcon
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </LinkIcon>
              <LinkIcon
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </LinkIcon>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  </GeneralContainerCard>
);

export default SoftwareDeveloperPortfolioProjects;
