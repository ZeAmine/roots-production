import React, { useState } from "react";
import "./ArtistInfo.css";

const ArtistInfo = () => {
  const [slideBtnInsta, setSlideBtnInsta] = useState<boolean>(false);
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [slideBtnLike, setSlideBtnLike] = useState<boolean>(false);

  const [saveActive, setSaveActive] = useState<boolean>(false);
  const [slideBtnSave, setSlideBtnSave] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  return (
    <article className="artist__info">
      <div className="artist_info_container">
        <div
          className="artist_info_left"
          onMouseOver={() => setShowBtn(true)}
          onMouseLeave={() => setShowBtn(false)}
        >
          <button
            className="cercle__btn artist_like"
            style={{
              backgroundColor: likeActive ? "var(--clr-primary-1" : "var(--clr-primary-3)",
              width: slideBtnLike ? "120px" : "60px",
            }}
            onClick={() => setLikeActive(!likeActive)}
            onMouseOver={() => setSlideBtnLike(true)}
            onMouseLeave={() => setSlideBtnLike(false)}
          >
            <div className="cercle_btn_container artist_like">
              <img
                src={process.env.PUBLIC_URL + "assets/icons/like.svg"}
                alt="icon vote"
                className="card_btn_icon"
              />
            </div>
            {slideBtnLike && likeActive ? (
              <span className="cercle_btn_text">Annuler</span>
            ) : slideBtnLike && !likeActive ? (
              <span className="cercle_btn_text">Voter</span>
            ) : null}
          </button>
          {showBtn && (
            <button
              className="cercle__btn artist_save"
              style={{
                backgroundColor: saveActive ? "var(--clr-primary-1" : "var(--clr-primary-3)",
                width: slideBtnSave ? "150px" : "60px",
              }}
              onClick={() => setSaveActive(!saveActive)}
              onMouseOver={() => setSlideBtnSave(true)}
              onMouseLeave={() => setSlideBtnSave(false)}
            >
              <div className="cercle_btn_container artist_save">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/save.svg"}
                  alt="icon enregistrer"
                  className="card_btn_icon"
                />
              </div>
              {slideBtnSave && saveActive ? (
                <span className="cercle_btn_text">Supprimer</span>
              ) : slideBtnSave && !saveActive ? (
                <span className="cercle_btn_text">Enregistrer</span>
              ) : null}
            </button>
          )}
          <div className="artist_block_img">
            <img
              src={process.env.PUBLIC_URL + "assets/imgs/platypus_small.jpg"}
              alt="platypus"
            />
          </div>
        </div>
        <div className="artist_info_right">
          <div className="artist__name">
            <h1>PLATYPUS</h1>
          </div>
          <div className="artist__followers">
            <span>3500 abonnés Spotify</span>
          </div>
          <div className="artist__description">
            <p>
              Iconic french trio Platypus (Gabriel, Sacha and Pierre-Louis)
              began its career in 2021 in the Parisian suburbs before disrupting
              the music industry of our time with their first single and
              masterpiece No Fears, heard by more than 17 listeners worldwide.
              <br />
              Now at the top, Platypus is preparing its already sold out
              post-covid tour at the Barbès metro. <br />
              Platypop, platypotes, Platypus.
            </p>
          </div>
          <div className="artist_info_block">
            <div className="artist__social">
              <span className="artist_social_title">RESEAU</span>
              <button
                className="cercle__btn artist_insta"
                style={{
                  width: slideBtnInsta ? "120px" : "60px",
                }}
                onMouseOver={() => setSlideBtnInsta(true)}
                onMouseLeave={() => setSlideBtnInsta(false)}
              >
                <div className="cercle_btn_container artist_insta">
                  <img
                    src={process.env.PUBLIC_URL + "assets/icons/instagram.svg"}
                    alt="icon vote"
                    className="card_btn_icon"
                  />
                </div>
                {slideBtnInsta ? (
                  <span className="cercle_btn_text reverse">Suivre</span>
                ) : null}
              </button>
            </div>
            <div className="artist__gender">
              <span className="artist_gender_title">GENRE</span>
              <div className="artist_gender_block">
                <span className="artist_single_gender">POP</span>
                <span className="artist_single_gender">ROCK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArtistInfo;
