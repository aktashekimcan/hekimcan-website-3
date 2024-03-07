// pages/_app.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/LoadingAnimation"; // Yükleyici bileşeni
import "../styles/globals.css";
import styled from "styled-components";
const MainContent = styled.main`
  margin-left: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Sadece ana sayfada ve ilk yüklemede yükleyiciyi göster
    if (router.pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 8000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Hekim Aktaş - Software Developer Portfolio</title>
        <meta
          name="description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />
        <meta
          name="keywords"
          content="Hekim Aktaş, Software Developer, Web Developer, Portfolio"
        />
        <meta name="author" content="Hekim Aktaş" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hekim Aktaş - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />
        <meta property="og:url" content="https://www.hekimaktas.com" />

        <meta
          name="twitter:card"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />
        <meta name="twitter:creator" content="@hekimmcann" />
        <meta
          name="twitter:title"
          content="Hekim Aktaş - Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Hekim Aktaş'ın kişisel software developer portfolyosu."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/D5603AQGaUrkZgKeBcA/profile-displayphoto-shrink_800_800/0/1697036903040?e=1715212800&v=beta&t=SUSU1ncYMe8tGXcmQfMPbXKgWCuy62vSAke8gO-pgvo"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <MainContent>
            <Component {...pageProps} />
            <Footer />
          </MainContent>
        </>
      )}
    </>
  );
}

export default MyApp;
