export default function Projects() {
    const projects = [
      {
        title: "Role & Permission Architecture",
        description:
          "Designed a flexible role and permission system for a multi-user platform, allowing dynamic access control.",
        features: [
          "Many-to-many user roles",
          "Permission-based access control",
          "Email verification flow",
        ],
      },
      {
        title: "Invitation & Onboarding Flow",
        description:
          "Built an invitation system that assigns roles automatically when a user accepts an invite.",
        features: [
          "Role assignment on acceptance",
          "Invitation lifecycle management",
          "Edge case handling for duplicate invites",
        ],
      },
      {
        title: "Role & Invitation System",
        description:
        "Built a secure invitation and onboarding system that automatically assigns roles to users when they accept invites. The system uses JWTs to ensure security, prevent tampering, and handle expiration.",
        features: [
            "Sends invitation link to email",
            "Securely encodes email, role, and invitation ID in a JWT",
            "Backend verifies JWT on acceptance and assigns role automatically",
            "Handles expiration and prevents tampering",
        ],

      },
      {
        title: "Advanced Filtering & Pagination Service",
        description:
          "Created a high-performance service to filter, paginate, and aggregate large datasets efficiently.",
        features: [
          "Conditional filtering",
          "Pagination and aggregate counts",
          "Optimized database queries",
        ],
      },
      {
        title: "Workspace Contacts Service Layer",
        description:
          "Built a modular service layer to manage customers, owners, and assignees with activity tracking.",
        features: [
          "Filtering and archiving contacts",
          "Campaign/proposal relationships",
          "Clean service layer design",
        ],
      },
    ];
  
    return (
      <section
        id="projects"
        style={{
          padding: "5rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1a1a1a" }}>
          Projects
        </h2>
  
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>
                {project.title}
              </h3>
              <p style={{ color: "#555", marginBottom: "1rem" }}>{project.description}</p>
              <ul style={{ color: "#555", paddingLeft: "1rem", lineHeight: "1.6" }}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  