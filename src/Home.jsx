import React from "react";
import bg from "./assets/bg.png";
import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import DraggableDialog from "./components/DraggableDialog";
const Home = () => {
  return (
    <div className="flicker">
      <Navbar />
      <div className="hero">
        <h1 className="title">
          Kapil's <br /> Portfolio
        </h1>
        <div className="roles">
          <p>&gt; Electronics and Communication Engineer</p>
          <p>&gt; Full Stack Developer</p>
          <p>&gt; Data Scientist</p>
          <p>&gt; Designer</p>
          <p>&gt; Based out of United Sectors of Chandigarh</p>
        </div>
        <img src={bg} className="bg" alt="background" />
      </div>
      <DraggableDialog />
      <MusicPlayer />
    </div>
  );
};

export default Home;
