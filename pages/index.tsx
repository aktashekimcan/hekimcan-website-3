import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Hero from "./hero"; // The Hero component now includes FeaturedProjects

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />

      <Contact />
    </>
  );
}
