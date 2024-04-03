import React from "react";
import Image from "next/image";

import styled, { keyframes } from "styled-components";
import { FaBootstrap, FaGit, FaJava } from "react-icons/fa";
import Head from "next/head";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center; // Merkezde hizalama
`;

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SkillsContainer = styled.div`
  padding: 50px;
  margin: 50px auto; // Üst ve alt marj eklendi
  width: 70%;
  max-width: 1200px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff8700,
    #ffd300,
    #deff0a,
    #a4ff0a,
    #26ff0a,
    #0aff87,
    #0affd3,
    #0a87ff,
    #0a26ff,
    #870aff,
    #d30aff,
    #ff0a87,
    #ff0a26,
    #ff0000,
    #ff007f,
    #00ff7f,
    #7f00ff,
    #ff7f00,
    #7fff00
  );
  background-size: 400% 400%;
  animation: ${rainbowAnimation} 10s ease infinite;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    margin: 30px auto; // Küçük ekranlarda azaltılmış marj
  }
`;

const SkillCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff8700,
      #ffd300,
      #deff0a,
      #a4ff0a,
      #26ff0a,
      #0aff87,
      #0affd3,
      #0a87ff,
      #0a26ff,
      #870aff,
      #d30aff,
      #ff0a87,
      #ff0a26,
      #ff0000,
      #ff007f,
      #00ff7f,
      #7f00ff,
      #ff7f00,
      #7fff00
    );
    background-size: 400% 400%;
    animation: ${rainbowAnimation} 3s ease infinite;
  }
`;

const SkillIcon = styled.div`
  font-size: 4em;
  display: flex;
  justify-content: center; /* Iconları yatayda ortala */
  align-items: center; /* Iconları dikeyde ortala */

  img {
    width: 100px; // İkonların genişliğini artır
    height: 100px; // İkonların yüksekliğini artır
    object-fit: contain;
  }
`;
const SkillsHeading = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff; // Başlık rengi
  font-size: 2em;
  margin-bottom: 20px; // Alt kısımdan boşluk
`;
const IconWrapper = styled.div`
  color: ${(props) => props.color};
`;
const Overlay = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 0.9em;

  ${SkillCard}:hover & {
    display: block;
  }
`;

const Skills: React.FC = () => {
  const skillIcons = [
    <Image
      key="html5"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="Html5"
      width={100}
      height={100}
    />,
    <Image
      key="css3"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
      alt="CSS3"
      width={100}
      height={100}
    />,
    <Image
      key="js"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      width={100}
      height={100}
    />,
    <Image
      key="react"
      width={100}
      height={100}
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="React"
    />,
    <Image
      key="typescript"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      width={100}
      height={100}
    />,
    <Image
      key="angular"
      src="https://angular.io/assets/images/logos/angular/angular.svg"
      alt="Angular"
      width={100}
      height={100}
    />,

    <Image
      key="sass"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
      width={100}
      height={100}
      alt="Sass"
    />,
    <IconWrapper color="#563d7c" key="bootstrap">
      <FaBootstrap />
    </IconWrapper>,

    <IconWrapper color="#f34f29" key="git">
      <FaGit />
    </IconWrapper>,
    <IconWrapper color="#007acc" key="java">
      <FaJava />
    </IconWrapper>,

    <Image
      key="tailwind"
      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="Tailwind CSS"
      width={100}
      height={100}
    />,
    <Image
      key="jquery"
      src="https://www.logo.wine/a/logo/JQuery/JQuery-Logo.wine.svg"
      alt="jQuery"
      width={100}
      height={100}
    />,
    <Image
      key="c"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
      alt="C"
      width={100}
      height={100}
    />,
    <Image
      key="cplusplus"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
      alt="C++"
      width={100}
      height={100}
    />,
    <Image
      key="python"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      alt="Python"
      width={100}
      height={100}
    />,
    <Image
      key="spring"
      src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
      alt="Spring Boot"
      width={100}
      height={100}
    />,
    <Image
      key="csharp"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
      alt="C#"
      width={100}
      height={100}
    />,
    <Image
      key="dotnet"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
      alt=".NET"
      width={100}
      height={100}
    />,
    <Image
      key="nodejs"
      width={100}
      height={100}
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      alt="Node.js"
    />,
    <Image
      key="mysql"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
      alt="MySQL"
      width={100}
      height={100}
    />,
    <Image
      key="ms-sql"
      src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
      alt="MS SQL Server"
      width={100}
      height={100}
    />,
    <Image
      key="mongodb"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      alt="MongoDB"
      width={100}
      height={100}
    />,
  ];

  return (
    <Container id="skills">
      <SkillsContainer>
        <SkillsHeading>Diller ve Araçlar</SkillsHeading>
        {skillIcons.map((icon, index) => (
          <SkillCard key={index}>
            <SkillIcon>{icon}</SkillIcon>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
