import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Design from "./sections/Design";
import Github from "./sections/Github";

export default function App() {
  return (
    <div
    style={{
      fontFamily: "'Inter', sans-serif",
      scrollBehavior: "smooth",
      backgroundColor: "#f5f6fa", // light grey background
    }}
  >
  

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Design />
      <Github />
    </div>
  );
}
