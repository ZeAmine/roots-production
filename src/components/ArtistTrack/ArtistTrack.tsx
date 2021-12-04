import React from "react";
import "./ArtistTrack.css";

interface ArtistTrackProps {
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  id: string;
  name: string;
}

const ArtistTrack = ({
  duration,
  currentTime,
  isPlaying,
  id,
  name,
}: ArtistTrackProps) => {
  return (
    <article className="artist_track">
      <div className="artist_track_container">
        <div className="artist_track_poster">
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/platypus_poster.jpg"}
            alt="artiste affiche"
          />
        </div>
        <div className="artist_track_block">
          <div className="artist_track_info">
            <div className="artist_track_top">
              <h3>TOP TITRES {id}</h3>
            </div>
            <div className="artist_track_title">
              <h3>"{name}"</h3>
            </div>
          </div>
          <div className="artist_track_control">
            <div className="artist_track_play">
              <img
                src={process.env.PUBLIC_URL + "assets/icons/btn_pause.svg"}
                alt="button pause"
                className="artist_track_play_icon"
              />
            </div>
            <div className="artist_track_number">
              <span>1:06</span>
            </div>
            <div className="artist_track_progress">
              <div className="artist_track_progress_bar" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArtistTrack;
