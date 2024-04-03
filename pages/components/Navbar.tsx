import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const menuItems = [
    { href: "hero", text: "Ana Sayfa" },
    { href: "featured-projects", text: "Öne Çıkan Projelerim" },
    { href: "about", text: "Hakkımda" },
    { href: "education", text: "Eğitim" },
    { href: "skills", text: "Diller ve Araçlar" },
    { href: "projects", text: "Projeler" },
    { href: "contact", text: "İletişim" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hekim Aktaş
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <ScrollLink
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  href={"#" + item.href}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
