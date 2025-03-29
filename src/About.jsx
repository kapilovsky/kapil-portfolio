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
              <div className="retro-dialog-header">
                <span className="dialog-title">About Me</span>
                <div className="dialog-controls">
                  <span className="control-button close">✕</span>
                </div>
              </div>
              <div className="retro-dialog-content">
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

                <div className="exp-card border-dashed border-2 p-4 my-4">
                  <div className="exp-card-header">
                    <h2 className="redaction-35 font-bold sm:text-2xl mt-4">
                      Full Stack Developer Intern
                    </h2>
                    <p className="redaction-35-italic sm:text-xl text-lg">
                      The Swago &bull; Sep'24 - Feb'25
                    </p>
                  </div>
                  <div className="exp-card-content text-md">
                    <p className="redaction-35">
                      - Developed a Web3 dApp using React.js and Motoko,
                      implementing Internet Identity authentication and custom
                      token smart contracts for decentralized trading
                      operations. <br />
                      - Engineered full-stack features including real-time
                      countdown systems, secure file handling for profile
                      images, and automated token distribution mechanisms using
                      blockchain technology. <br />- Built and integrated smart
                      contracts for secure token transfers and trading
                      operations, implementing proper authorization checks and
                      maintaining data integrity across the DFINITY's Internet
                      Computer blockchain
                    </p>
                    <p className="redaction-35 mt-4">
                      Tech Stack: React.js, Tailwind CSS, Motoko, DFINITY's
                      Internet Computer
                    </p>
                  </div>
                </div>

                <div className="exp-card border-dashed border-2 p-4 mb-4">
                  <div className="exp-card-header">
                    <h2 className="redaction-35 font-bold sm:text-2xl mt-4">
                      Web Development Intern
                    </h2>
                    <p className="redaction-35-italic sm:text-xl text-lg">
                      Design Innovation Centre (DIC) Lab &bull; Jun'24 – Jul'24
                    </p>
                  </div>
                  <div className="exp-card-content text-md">
                    <p className="redaction-35">
                      - Developed a responsive website for TechViz, a tool
                      enhancing spatial awareness for the visually impaired.{" "}
                      <br />- Customized Google Forms which typically doesn't
                      allow CSS customization when embedded. This hack enabled
                      me to create a tailored form while retaining all the
                      powerful features of Google Forms, including:
                      <br />
                      &bull; Email notifications <br /> &bull; Data storage in
                      Google Sheets
                      <br /> &bull; Scalability <br /> &bull; Unlimited
                      responses <br />
                    </p>
                    <p className="redaction-35 mt-4">
                      Tech Stack: Next.js + Framer
                    </p>
                  </div>
                </div>

                <hr />
                <hr />
                <h4 className="redaction-35 text-center sm:text-2xl text-lg">
                  Volunteering
                </h4>
                <hr />
                <hr />

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
