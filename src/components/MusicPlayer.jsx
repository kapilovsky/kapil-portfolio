import React, { useState, useRef } from "react";
import song from "../assets/parkwalk.mp3";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import "../styles/MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="lofi-music-player">
      <audio ref={audioRef} src={song} loop />
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? <img src={pause} alt="" /> : <img src={play} alt="" />}
      </button>
      <p>Park Walk.mp3</p>
    </div>
  );
};

export default MusicPlayer;
