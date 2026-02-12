import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Design from "./sections/Design";
import Github from "./sections/Github";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div
    style={{
      fontFamily: "'Inter', sans-serif",
      scrollBehavior: "smooth",
      backgroundColor: "#f5f6fa", 
      paddingTop: "80px" 
    }}
  >
  <Navbar />

      <Hero />
      <About />
      <Project />
      <TechStack />
      <Design />
      <Contact />
      <Github />
    </div>
  );
}
