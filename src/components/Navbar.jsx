import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" onClick={pageUp} />
        {/* <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}

        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
