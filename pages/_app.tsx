// pages/_app.tsx
import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/LoadingAnimation"; // Yükleyici bileşeni
import "../styles/globals.css";
import styled from "styled-components";
interface MainContentProps {
  isNavOpen: boolean;
}

// Update your styled component to use the props interface
const MainContent = styled.main<MainContentProps>`
  transition: margin-left 0.3s ease; // Smooth transition for the margin
  margin-left: ${(props) => (props.isNavOpen ? "300px" : "0")}; // Dynamic margin based on the sidebar state

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const SidebarContext = createContext({
  isNavOpen: false,
  setIsNavOpen: (state: boolean) => {},
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(true); // Added state for sidebar
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
          <SidebarContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            <Navbar />
            <MainContent isNavOpen={isNavOpen}>
              <Component {...pageProps} />
              <Footer />
            </MainContent>
          </SidebarContext.Provider>
        </>
      )}
    </>
  );
}

export default MyApp;
