import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">About us</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      {/* Navbar right */}
      <div className="right">
        <a href="/">sign in</a>
        <a href="/" className="register">
          sign up
        </a>
        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            // Setting the oppposite value to setOpen variable
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        {/* Navbar for smaller devices */}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
