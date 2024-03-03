import Head from "next/head";
import styled from "styled-components";
import TypingAnimation from "./components/TypingAnimation";

const PageContainer = styled.div`
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const ContentCard = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 600px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Introduction = styled.section`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
  }
`;

const TypingCard = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Index = () => {
  return (
    <>
      <Head>
        <title>Ana Sayfa - HEKİM AKTAŞ'ın Portfolyosu</title>
        <meta
          name="description"
          content="HEKİM AKTAŞ'ın Software Developer Portfolio Ana Sayfası"
        />
      </Head>
      <PageContainer>
        <CardsContainer>
          <ContentCard>
            <CardImage
              src="https://scontent.fesb7-1.fna.fbcdn.net/v/t39.30808-6/273762295_4809138162509607_8738308158712443924_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=02bIgSyrDF0AX-Mrdn3&_nc_ht=scontent.fesb7-1.fna&oh=00_AfA6eyamnPjuKoZoelJeMUTi5cTbXuAVIfzLsRhKcdE7QA&oe=65E7092F"
              alt="Hekim Aktaş"
            />
            <h1>HEKİM AKTAŞ</h1>
          </ContentCard>
          <ContentCard>
            <Introduction>
              <p>
                Merhaba, ben Hekim Aktaş. Yaratıcı ve yenilikçi yazılım
                çözümleri sunmayı hedefleyen bir yazılım geliştiriciyim.
              </p>
              <p>
                Kişisel gelişim sürecinin sürekli bir öğrenme ve yenilenme
                süreci olduğuna inanıyorum ve bu inançla, her yeni günü bir
                fırsat olarak görüp, bilgimi ve yeteneklerimi artırmaya devam
                ediyorum. Portfolyoma hoş geldiniz.
              </p>
            </Introduction>
          </ContentCard>
        </CardsContainer>
        <TypingCard>
          <TypingAnimation />
        </TypingCard>
      </PageContainer>
    </>
  );
};

export default Index;
