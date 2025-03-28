import "../styles/Navbar.css";
import eye from "../assets/eye.png";
import signal from "../assets/cellular-signal-3.png";
import run from "../assets/human-run.png";
import Time from "./Time";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className="eye">
        <Link to="/">
          <img src={eye} alt="eye" />
        </Link>
      </div>
      <div className="time">
        <Time />
        <img src={signal} alt="signal" />
        <img src={run} alt="run" />
      </div>
    </nav>
  );
};

export default Navbar;
