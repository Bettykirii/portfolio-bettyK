import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Design", href: "#design" },
  { name: "Github", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80 && top + section.clientHeight > 80) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#ffffff",
        padding: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        zIndex: 1000,
      }}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{
            color: active === link.href ? "#6C63FF" : "#1a1a1a",
            fontWeight: active === link.href ? 700 : 500,
            transition: "color 0.3s",
            textDecoration: "none",
          }}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
