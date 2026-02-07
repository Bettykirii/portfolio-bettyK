export default function Github() {
    const repos = [
      {
        name: "Role & Permission System",
        url: "https://github.com/bettykirii/role-permission-system",
      },
      {
        name: "Invitation & Onboarding Flow",
        url: "https://github.com/bettykirii/invitation-system",
      },
      {
        name: "Filtering & Pagination Service",
        url: "https://github.com/bettykirii/filter-pagination-service",
      },
      {
        name: "Workspace Contacts Service",
        url: "https://github.com/bettykirii/workspace-contacts-service",
      },
    ];
  
    return (
      <section
        id="github"
        style={{
          padding: "5rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1a1a1a" }}>
          GitHub & Diagrams
        </h2>
  
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginBottom: "2rem" }}>
          Here are some of my backend projects with source code and architecture diagrams to show how I structure systems and solve complex problems.
        </p>
  
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              style={{
                padding: "0.6rem 1.2rem",
                border: "2px solid #1a1a1a",
                borderRadius: "5px",
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: 600,
                transition: "all 0.3s",
                width: "fit-content",
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
              {repo.name}
            </a>
          ))}
        </div>
      </section>
    );
  }
  