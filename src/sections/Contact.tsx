export default function Contact() {
    return (
      <section
        id="contact"
        style={{
          padding: "6rem 1rem",
          maxWidth: "800px",
          margin: "0 auto 3rem auto",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          scrollMarginTop: "80px",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>Contact Me</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "2rem" }}>
          Want to work together or just say hi? Drop me a message!
        </p>
        <a
          href="mailto:youremail@example.com"
          style={{
            padding: "0.7rem 1.4rem",
            border: "2px solid #6C63FF",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#6C63FF",
            fontWeight: 600,
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = "#6C63FF";
            target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = "transparent";
            target.style.color = "#6C63FF";
          }}
        >
          Send a Message
        </a>
      </section>
    );
  }
  