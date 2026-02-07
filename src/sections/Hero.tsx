export default function Hero() {
    return (
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "0 1rem",
          gap: "1.5rem", // adds space between elements
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>
          Betty Kirii
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#333" }}>
          Backend Engineer (Node.js / Express)
        </h2>
  
        {/* Tagline card */}
        <div
          style={{
            maxWidth: "650px",
            backgroundColor: "#fff",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          I design and build production-level backend systems focused on permissions, data logic, and scalable service architecture.
        </div>
  
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <a
            href="#projects"
            style={{
              padding: "0.6rem 1.2rem",
              border: "2px solid #1a1a1a",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#1a1a1a",
              fontWeight: 600,
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1a1a";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a1a";
            }}
          >
            View Projects
          </a>
          <a
            href="https://github.com/bettykirii"
            target="_blank"
            style={{
              padding: "0.6rem 1.2rem",
              border: "2px solid #1a1a1a",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#1a1a1a",
              fontWeight: 600,
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1a1a";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a1a";
            }}
          >
            GitHub
          </a>
        </div>
      </section>
    );
  }
  