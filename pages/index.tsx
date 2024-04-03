import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Hero from "./hero"; // The Hero component now includes FeaturedProjects
import CursorTrailCanvas from "./components/CursorTrailCanvas"; // Import the component

export default function Home() {
  // Define the color for the cursor trail effect
  const cursorTrailColor = "#61dafb";

  return (
    <>
      {/* Render the CursorTrailCanvas with the specified color */}
      <CursorTrailCanvas
        color={cursorTrailColor}
        style={{ position: "absolute", zIndex: 10 }}
      />

      {/* Main page content */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
