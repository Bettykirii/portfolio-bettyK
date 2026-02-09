import React from "react";

const primaryColor = "#6C63FF";

export default function Hero() {
  const buttonStyle: React.CSSProperties = {
    padding: "0.7rem 1.4rem",
    border: `2px solid ${primaryColor}`,
    borderRadius: "6px",
    textDecoration: "none",
    color: primaryColor,
    fontWeight: 600,
    transition: "all 0.3s",
    marginRight: "1rem",
  };

  const onHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.backgroundColor = primaryColor;
    target.style.color = "#fff";
  };

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.backgroundColor = "transparent";
    target.style.color = primaryColor;
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Hi, I'm Betty 👋
      </h1>

      <p style={{ maxWidth: "600px", marginBottom: "2rem", fontSize: "1.1rem" }}>
        I design and build secure backend systems with clean architecture,
        scalable APIs, and thoughtful role-based access control.
      </p>

      <div>
        <a
          href="#projects"
          style={buttonStyle}
          onMouseOver={onHover}
          onMouseOut={onLeave}
        >
          View Projects
        </a>

        <a
          href="https://github.com/BettyKirii"
          target="_blank"
          style={buttonStyle}
          onMouseOver={onHover}
          onMouseOut={onLeave}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
