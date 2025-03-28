import "../styles/Navbar.css";
import eye from "../assets/eye.png";
import signal from "../assets/cellular-signal-3.png";
import run from "../assets/human-run.png";
import Time from "./Time";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/resume">Resume</a>
      </div>
      <div className="eye">
        <img src={eye} alt="eye" />
      </div>
      <div>
        <Time />
        <img src={signal} alt="signal" />
        <img src={run} alt="run" />
      </div>
    </nav>
  );
};

export default Navbar;
