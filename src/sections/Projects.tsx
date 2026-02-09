import React from "react";

const primaryColor = "#6C63FF";

export default function Projects() {
  const cardStyle: React.CSSProperties = {
    padding: "1.5rem",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
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
      id="projects"
      style={{
        padding: "6rem 1rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#ffffff",
borderRadius: "12px",
marginBottom: "3rem",
boxShadow: "0 4px 12px rgba(0,0,0,0.05)",

      }}
    >
      <h2 style={{ marginBottom: "3rem" }}>Projects</h2>

      <div
        style={{
          display: "grid",
          gap: "2rem",
        }}
      >
        {/* Project Card */}
        <div
          style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
        >
          <h3 style={{ color: primaryColor }}>Role & Invitation System</h3>
          <p>
            Built a secure invitation and onboarding system using JWT to assign
            roles automatically when users accept invitations.
          </p>
          <ul>
            <li>Sends invitation links via email</li>
            <li>Encodes role and email securely in JWT</li>
            <li>Prevents tampering and handles expiration</li>
          </ul>
        </div>

        {/* Another Project Card */}
        <div
          style={cardStyle}
          onMouseOver={cardHover}
          onMouseOut={cardLeave}
        >
          <h3 style={{ color: primaryColor }}>Invitation & Onboarding Flow"</h3>
          <p>
          "Designed a flexible role and permission system for a multi-user platform, allowing dynamic access control.",

          </p>
          <ul>
            <li>Role assignment on acceptancec</li>
            <li>Invitation lifecycle managements</li>
            <li>Edge case handling for duplicate invitess</li>
          </ul>
        </div>
      </div>

      {/* Another Project Card */}
      <div 
      style={cardStyle}
      onMouseOver={cardHover}
      onMouseOut={cardLeave}
      >
        <h3 style={{ color: primaryColor }}>Advanced Filtering & Pagination Service</h3>
        <p>
        "Created a high-performance service to filter, paginate, and aggregate large datasets efficiently.",

        </p>
        <ul>
          <li>Conditional filtering</li>
          <li>Pagination and aggregate counts</li>
          <li>Optimized database queries</li>
        </ul>
      </div>

      {/* Another Project Card */}
      <div 
      style={cardStyle}
      onMouseOver={cardHover}
      onMouseOut={cardLeave}
      >
        <h3 style={{ color: primaryColor }}>Workspace Contacts Service Layer</h3>
        <p>
          "Built a modular service layer to manage customers, owners, and assignees with activity tracking.",

        </p>
        <ul>
          <li>Filtering and archiving contacts</li>
          <li>Campaign/proposal relationships</li>
          <li>Activity tracking and notifications</li>
        <li>Clean service layer design</li>
        </ul>
      </div>
        

    </section>
  );
}


































