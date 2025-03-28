import React from "react";
import bg from "./assets/purple.png";
import Navbar from "./components/Navbar";
import "./styles/About.css";
import ditherme from "./assets/ditherme.png";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-hero">
        <div className="retro-dialog-container">
          <div className="retro-dialog">
            <div className="dialog-frame">
              <div className="dialog-header">
                <span className="dialog-title">About Me</span>
                <div className="dialog-controls">
                  <span className="control-button close">✕</span>
                </div>
              </div>
              <div className="dialog-content">
                <div className="flex justify-between mb-4 bg-[#1b1b1b] text-[#f9f9f9] banner">
                  <p>Last Updated</p>
                  <p>30th March {new Date().getFullYear()}</p>
                </div>
                <h1 className="text-center sm:text-5xl text-4xl heading mb-10 ">
                  System Logs <br /> Personal Edition
                </h1>
                <h2 className="redaction-35 text-center sm:text-3xl mb-10">
                  The Unwritten Pages
                </h2>
                <h4 className="redaction-35-italic text-center sm:text-xl text-sm mb-10">
                  This is an invitation—not just to read, but to participate. To
                  see beyond the immediate, to challenge the status quo, and to
                  recognize that the most exciting opportunities are often the
                  ones we haven't yet imagined.
                </h4>
                <div className="flex justify-center mb-10">
                  <img src={ditherme} alt="" />
                </div>

                <hr />
                <hr />
                <h4 className="redaction-35 text-center sm:text-2xl text-lg">
                  Work Experience
                </h4>
                <hr />
                <hr />

                <div className="exp-card">
                  <div className="exp-card-header">
                    <h2 className="redaction-35 font-bold sm:text-2xl">
                      Full Stack Developer Intern
                    </h2>
                    <p className="redaction-35-italic sm:text-xl text-lg">
                      The Swago &bull; Sep'24 - Feb'25
                    </p>
                  </div>
                  <div className="exp-card-content text-sm">
                    <p>
                      Currently working on a project that involves building a
                      web application using React and Node.js.
                    </p>
                  </div>
                </div>

                <p className="text-sm">
                  Hello! I'm a developer passionate about creating unique
                  digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg} className="bg" alt="background" />
      </div>
    </div>
  );
};

export default About;
