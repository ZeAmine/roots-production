import React, { useState } from "react";
import ArtistTrack from "../ArtistTrack/ArtistTrack";
import "./ArtistListTrack.css";

const ArtistListTrack = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="artist_list_track">
      <ArtistTrack
        id="#1"
        name="NO NAME"
        duration={duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
      />
      <ArtistTrack
        id="#2"
        name="LOREM IPSUM"
        duration={duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
      />
      <ArtistTrack
        id="#3"
        name="LOREM IPSUM"
        duration={duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
      />
      <ArtistTrack
        id="#4"
        name="LOREM IPSUM"
        duration={duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
      />
      <ArtistTrack
        id="#5"
        name="LOREM IPSUM"
        duration={duration}
        currentTime={currentTime}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default ArtistListTrack;
