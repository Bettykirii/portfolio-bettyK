export default function TechStack() {
    const stacks = {
      Backend: ["Node.js", "Express", "Sequelize"],
      Database: ["PostgreSQL", "MySQL"],
      Architecture: ["Role & permission systems", "Service-layer architecture", "Filtering & Pagination"],
      Tools: ["Git", "Postman", "Docker"],
    };
  
    return (
      <section
        id="stack"
        style={{
          padding: "5rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1a1a1a" }}>
          Tech Stack
        </h2>
  
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {Object.entries(stacks).map(([category, skills]) => (
            <div
              key={category}
              style={{
                minWidth: "200px",
                padding: "1rem",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#333" }}>
                {category}
              </h3>
              <ul style={{ paddingLeft: "1rem", color: "#555", lineHeight: "1.6" }}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  