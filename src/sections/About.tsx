export default function About() {
    return (
      <section
        id="about"
        style={{
          padding: "5rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#ffffff",
borderRadius: "12px",
marginBottom: "3rem",
boxShadow: "0 4px 12px rgba(0,0,0,0.05)",

        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#1a1a1a" }}>
          About Me
        </h2>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "1.5rem" }}>
          I am a Backend Engineer specializing in Node.js and Express. I design and build production-level systems with a focus on scalability, maintainability, and clean architecture.
        </p>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "1.5rem" }}>
          My core strengths include building role and permission systems, designing service layers, and implementing complex data logic such as filtering, pagination, and aggregation.
        </p>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
          I’m driven by creating backend systems that are reliable, efficient, and easy for teams to maintain.
        </p>
      </section>
    );
  }
  