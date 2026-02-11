export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 1rem",
        maxWidth: "900px",
        margin: "0 auto 3rem auto",
        textAlign: "center",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          marginBottom: "2.5rem",
          color: "#1a1a1a",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
        }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
          I am a Backend Engineer specializing in Node.js and Express. I design
          and build production-level systems with a focus on scalability,
          maintainability, and clean architecture.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
          My core strengths include building role and permission systems,
          designing service layers, and implementing complex data logic such as
          filtering, pagination, and aggregation.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
          I’m driven by creating backend systems that are reliable, efficient,
          and easy for teams to maintain.
        </p>
      </div>
    </section>
  );
}
