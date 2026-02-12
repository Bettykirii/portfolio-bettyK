export default function Project() {
    return (
      <section
        id="projects"
        style={{
          padding: "5rem 1rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
          Projects
        </h2>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          <div style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
          >
            <h3>Role & Permission System</h3>
            <p>
              Designed a scalable role-based access control system using Sequelize
              with pivot tables for many-to-many relationships between users,
              roles, and permissions.
            </p>
          </div>
  
          <div style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
          >
            <h3>Invitation & JWT Activation Flow</h3>
            <p>
              Built an invitation system where users are pre-assigned roles and
              activated through email verification using JWT tokens.
            </p>
          </div>
  
          <div style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
          >
            <h3>Advanced Filtering & Pagination</h3>
            <p>
              Implemented complex filtering logic for media items with aggregate
              counts, landlord/regulator presence checks, and efficient
              pagination.
            </p>
          </div>
  
          <div style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
          >
            <h3>Workspace Contacts Service</h3>
            <p>
              Created a service managing customers, media owners, and assignees
              with archiving, activity tracking, and workspace-level separation.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  const cardStyle: React.CSSProperties = {
    padding: "2rem",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };
  const cardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(-5px)";
    target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    const heading = target.querySelector("h3");
if (heading) heading.style.color = "#6C63FF"; // accent color

  };
  const cardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = "translateY(0)";
    target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    const heading = target.querySelector("h3") as HTMLHeadingElement | null;
    if (heading) heading.style.color = "#1a1a1a"; // default color
  };
  