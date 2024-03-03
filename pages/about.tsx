import Head from "next/head";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #121212; /* Karanlık tema arka planı */
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #1e1e1e; /* Card arka planı */
  border-radius: 20px; /* Card border radius */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Card box shadow */
  padding: 2rem;
  margin: 1rem;
  max-width: 600px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #61dafb;
`;

const About = () => {
  return (
    <>
    <Head>
  <title>Ana Sayfa - HEKİM AKTAŞ&apos;ın Portfolyosu</title>
  <meta
    name="description"
    content="HEKİM AKTAŞ&apos;ın Software Developer Portfolio Hakkımda Sayfası"
  />
</Head>

      <AboutContainer>
        <Card>
          <ProfileImage
            src="https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-6/273499217_4790860821004008_555242861065204042_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=_ew5wEwt9RUAX8bogqx&_nc_ht=scontent.fesb7-1.fna&oh=00_AfCnq_Ovkadfu6OH04JgwRY7zby2BOEY81F6l1c7XbkXxg&oe=65E8215D"
            alt="Profil Resmi"
          />
          <h1>Hekim Aktaş</h1>
          <p>
            2017 yılından bu yana Full Stack Web Geliştirme alanında çalışan bir
            Software Developerım.
          </p>
        </Card>
        <Card>
          <p>
            21 yaşında olmama rağmen, modern web teknolojileri ve programlama
            dilleri üzerine derinlemesine bilgi ve deneyim sahibiyim.
            JavaScript, React, Node.js ve MongoDB gibi teknolojilerle çalışmayı
            özellikle seviyorum.
          </p>
        </Card>
        <Card>
          <p>
            Yenilikçi çözümler sunmak, karmaşık problemleri çözmek ve kullanıcı
            dostu, etkili web uygulamaları geliştirmek benim için bir tutku.
            Ekip çalışmasına yatkınlığım ve projeleri başarıyla tamamlama
            konusundaki kararlılığım, bu alandaki başarımın temel taşlarından.
          </p>
        </Card>
      </AboutContainer>
    </>
  );
};

export default About;
