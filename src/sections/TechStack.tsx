import React from "react";

const primaryColor = "#6C63FF";

export default function TechStack() {
  const cardStyle: React.CSSProperties = {
    padding: "1.5rem",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(-5px)";
    target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  };

  const cardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(0)";
    target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  };

  return (
    <section
      id="tech"
      style={{
        padding: "6rem 1rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#ffffff",
borderRadius: "12px",
marginBottom: "3rem",
boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
scrollMarginTop: "80px",

      }}
    >
      <h2 style={{ marginBottom: "3rem" }}>Tech Stack</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "2rem",
        }}
      >
        {["Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "React", "TypeScript"].map(
          (tech) => (
            <div
              key={tech}
              style={cardStyle}
              onMouseOver={cardHover}
              onMouseOut={cardLeave}
            >
              <h3 style={{ color: primaryColor }}>{tech}</h3>
            </div>
          )
        )}
      </div>
    </section>
  );
}
