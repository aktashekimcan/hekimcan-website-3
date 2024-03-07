import Head from "next/head";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #121212; // Karanlık tema arka planı
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #1e1e1e; // Card arka planı
  border-radius: 20px; // Card border radius
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); // Card box shadow
  padding: 2rem;
  margin: 1rem;
  width: 100%; // Mobil ve küçük ekranlar için genişlik
  max-width: 600px; // Varsayılan maksimum genişlik
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    max-width: 700px; // Tablet ve daha büyük ekranlar için genişlik
  }

  @media (min-width: 1024px) {
    max-width: 800px; // Masaüstü ekranlar için genişlik
  }

  @media (min-width: 1200px) {
    max-width: 1000px; // Büyük masaüstü ekranlar için genişlik
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
       <title>Hakkımda -  HEKİM AKTAŞ&apos;ın  Portfolyosu</title>
        <meta
          name="description"
          content="Hekim Aktaş Software Developer Portfolio Hakkımda Sayfası"
        />
      </Head>
      <AboutContainer>
        <Card>
          <ProfileImage
            src="https://media.licdn.com/dms/image/D4E03AQGXmGkqP3kSGA/profile-displayphoto-shrink_800_800/0/1709712082289?e=1715212800&v=beta&t=veLSpXN3RxlLrtOJvtxzf5upo9yuDpWDCFeNfbGiWt0"
            alt="Profil Resmi"
          />
          <h1>Hekim Aktaş</h1>
          <p>
            2017 yılından bu yana Full Stack Web Geliştirme alanında çalışan bir
            Software Developer&apos;ım.
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
