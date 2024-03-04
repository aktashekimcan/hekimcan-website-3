// pages/_app.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/LoadingAnimation"; // Import the Preloader component
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate the loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Only render the Preloader when loading
  }

  // Render the rest of the app when not loading
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
