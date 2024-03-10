import Head from "next/head";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faGlobe,
  faPhone,
  faCity,
  faGraduationCap,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
  background-color: #1e1e1e;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem; // Standart iç boşluk
  margin: 1rem;
  width: calc(100% - 2rem);
  max-width: 1000px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Mobil ve küçük ekranlar için stil
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem;
    width: calc(100% - 1rem);

    .info-section {
      align-items: stretch;

      h1 {
        font-size: 2rem;
      }

      .info {
        font-size: 0.9rem;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0.5rem; // Artan alt boşluk

        .icon {
          margin-bottom: 0.3rem;
        }

        .label {
          font-weight: bold;
          display: block; // Etiket ve değeri aynı satırda göstermek için
        }

        .value {
          margin-left: 0;
          display: block; // Etiket ve değeri aynı satırda göstermek için
        }
      }
    }
  }

  // Orta ekranlar için stil
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  // Büyük ekranlar ve masaüstü için stil
  @media (min-width: 1025px) {
    padding: 3rem; // Daha fazla iç boşluk
    flex-direction: row;
    justify-content: space-between;
    text-align: left;

    .info-section {
      width: 50%; // İçerik genişliği ayarla

      .info {
        font-size: 1rem; // Büyük ekran font boyutu
        flex-direction: row; // İkon ve bilgileri yan yana düzenle
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem; // Alt bilgi boşluğu

        .icon {
          margin-right: 0.5rem; // İkon sağ boşluk
        }

        .label {
          margin-right: 0.3rem; // Etiket sağ boşluk
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1205px) {
    margin: 0 1rem; /* Sağ ve sol boşluk ekle */
    width: auto; /* Genişliği içeriğe göre ayarla */
    flex-direction: row;
    padding: 1rem;
    margin: 0.5rem;

    .info-section {
      flex: 1; // info-section'ın esnekliğini ayarla
      align-items: stretch;
      h1 {
        font-size: 2rem;
      }
      .info {
        font-size: 0.9rem;
        flex-direction: row; // İkon ve bilgileri yan yana düzenle
        align-items: center;
        margin-bottom: 0.5rem;
        .icon {
          margin-bottom: 0;
          margin-right: 0.3rem; // İkon sağ boşluk
        }
        .label {
          font-weight: bold;
          margin-right: 0.3rem; // Etiket sağ boşluk
        }
        .value {
          margin-left: 0;
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 829px) {
    padding: 1rem;
    margin: 0.5rem;
    width: auto; /* Genişliği içeriğe göre ayarla */
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border: none;
  border-radius: 20px;

  // Diğer ekran boyutları için stil ayarları
  @media (min-width: 768px) {
    width: 350px; // Orta ve büyük ekranlarda sabit genişlik
    height: auto; // Orta ve büyük ekranlarda sabit yükseklik
  }

  // Belirtilen aralık için stil ayarları
  @media (min-width: 769px) and (max-width: 1205px) {
    width: 250px; // Profil resmini bu aralıkta daha da küçült
    height: auto;
    margin-bottom: 1rem; // Alt kısımda boşluk bırak
    margin-right: 1rem;
  }
  @media (min-width: 769px) and (max-width: 829px) {
    width: 200px; /* Profil resmini bu aralıkta daha da küçült */
    height: auto;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;


const InfoCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(145deg, #232323, #1a1a1a);
  color: #61dafb; // Öne çıkan bilgi için mavi renk

  h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc; // İçerik için daha yumuşak bir renk
    font-size: 1.1rem;
    line-height: 1.7;
    max-width: 600px; // İçerik genişliği
    margin: auto;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const About = () => {
  return (
    <>
      <Head>
        <title>Hakkımda - Hekim Aktaş Portfolio</title>
        <meta
          name="description"
          content="Hekim Aktaş Software Developer Portfolio Hakkımda Sayfası"
        />
      </Head>
      <AboutContainer>
        <Card>
          <ProfileImage
            src="https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-6/273762295_4809138162509607_8738308158712443924_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hqngdumZCQQAX-fW86z&_nc_ht=scontent.fesb7-1.fna&oh=00_AfC4GM5Pixbgq0kcxUc8wSDyBZht7sDL8nOAFp8AoHCqQg&oe=65F0EC6F"
            alt="Profile Image"
          />
          <div className="info-section">
            <h1>Hekim Aktaş</h1>
            <p>Jr.Full Stack Web Developer</p>
            <div className="info">
              <FontAwesomeIcon icon={faBirthdayCake} className="icon" />
              <span className="label">Doğum Günü:</span>
              <span className="value">2 Eylül 2003</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              <span className="label">Website:</span>
              <span className="value">www.hekimaktas.com</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span className="label">Telefon:</span>
              <span className="value">+90 531 905 02 75</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span className="label">Adres:</span>
              <span className="value">İzmir,Türkiye</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />
              <span className="label">Derece:</span>
              <span className="value">Yazılım Mühendisliği-Lisans</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span className="label">Email:</span>
              <span className="value">hekimcanaktas@gmail.com</span>
            </div>
          </div>
        </Card>
        <InfoCard>
          <div>
            <h2>Full Stack Web Development</h2>
            <p>
              2017 yılından bu yana Full Stack Web Geliştirme alanında çalışan
              bir Software Developerım.
            </p>
          </div>
          <div>
            <h2>Modern Teknolojiler</h2>
            <p>
              21 yaşında olmama rağmen, modern web teknolojileri ve programlama
              dilleri üzerine derinlemesine bilgi ve deneyim sahibiyim.
              JavaScript, React, Node.js ve MongoDB gibi teknolojilerle
              çalışmayı özellikle seviyorum.
            </p>
          </div>
        </InfoCard>
        <InfoCard>
          <div>
            <h2>Tutku & Kararlılık</h2>
            <p>
              Yenilikçi çözümler sunmak, karmaşık problemleri çözmek ve
              kullanıcı dostu, etkili web uygulamaları geliştirmek benim için
              bir tutku. Ekip çalışmasına yatkınlığım ve projeleri başarıyla
              tamamlama konusundaki kararlılığım, bu alandaki başarımın temel
              taşlarından.
            </p>
          </div>
          <div>
            <h2>Analytics & Problem Solving</h2>
            <p>
              Zorlukların üstesinden gelmek için güçlü analitik yetenekler ve
              sistematik problem çözme yaklaşımları geliştirdim. Verileri hızla
              anlamak ve içgörüler çıkarmak, projelerde karşılaşılan en karmaşık
              zorlukları bile aşmamı sağlıyor. Yeni sorunlarla karşılaştığımda,
              bunları çözmek için yaratıcı ve yenilikçi çözümler üretme
              yeteneğim, beni sürekli olarak gelişen bir yazılım geliştirici
              yapıyor.
            </p>
          </div>
        </InfoCard>
      </AboutContainer>
    </>
  );
};

export default About;
