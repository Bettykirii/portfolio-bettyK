export default function Design() {
    return (
      <section
        id="design"
        style={{
          padding: "5rem 1rem",
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
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1a1a1a" }}>
          How I Design Systems
        </h2>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "1.5rem" }}>
          I approach backend development by thinking in **systems**, not just code. I separate logic into service layers, ensure permissions and roles are checked early, and design with **scalability and maintainability** in mind.
        </p>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "1.5rem" }}>
          Every feature is built with edge cases in mind — from onboarding flows to data filtering — and security is considered from the start. I aim to write **clean, testable, and reliable code** that teams can build on confidently.
        </p>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
          My goal is to create backend systems that are **robust, easy to maintain, and scale gracefully** as products grow.
        </p>
      </section>
    );
  }
  