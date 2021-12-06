import React, { useEffect, useState } from "react";
import { IVote } from "../../decl";
import { Link } from "react-router-dom";
import { getVote } from "../../api";
import "./Card.css";

export type CardsState = {
  vote: IVote | undefined;
};

export type CardsProps = {
  artistId: string;
  artistName: string;
  artistImageUrl: string;
  artistVotes: string;
};

const Card = ({
  artistId,
  artistName,
  artistImageUrl,
  artistVotes,
}: CardsProps) => {
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [slideBtnLike, setSlideBtnLike] = useState<boolean>(false);
  const [saveActive, setSaveActive] = useState<boolean>(false);
  const [slideBtnSave, setSlideBtnSave] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [IdArtist, setSetIdArtist] = useState<string>("");

  const [appVote, setAppVote] = useState<CardsState["vote"]>();
  const [appVoteCancel, setAppVoteCancel] = useState<CardsState["vote"]>();
  const [viewVote, setSetViewVote] = useState<boolean>(false);

  const fetchVote = async () => {
    const votePage = await getVote();
    setAppVote({ vote: votePage });
  };

  const fetchVoteCancel = async () => {
    const voteCancelPage = await getVote();
    setAppVoteCancel({ vote: voteCancelPage });
  };

  useEffect(() => {
    if (viewVote) {
      fetchVote();
      alert("Votre vote a ete pris en compte !");
      console.log("Votre vote a ete pris en compte !");
    }
    if (!viewVote) {
      fetchVoteCancel();
      console.log("Votre vote a ete annulé !");
    }
  }, [viewVote]);

  const handleClick = () => {
    setLikeActive(!likeActive);
    setSetViewVote(!viewVote);
  };

  return (
    <article
      className="card"
      onMouseOver={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
      onClick={() => setSetIdArtist(artistId)}
    >
      <div className="card__container">
        <Link to="/artiste">
          <div className="card__redirect" />
        </Link>
        <div
          className="cercle__btn card_like"
          style={{
            backgroundColor: likeActive
              ? "var(--clr-primary-1)"
              : "var(--clr-primary-3)",
            width: slideBtnLike ? "120px" : "60px",
          }}
          onClick={handleClick}
          onMouseOver={() => setSlideBtnLike(true)}
          onMouseLeave={() => setSlideBtnLike(false)}
        >
          <div className="cercle_btn_container card_like">
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
        </div>
        {showBtn && (
          <div
            className="cercle__btn card_save"
            style={{
              backgroundColor: saveActive
                ? "var(--clr-primary-1"
                : "var(--clr-primary-3)",
              width: slideBtnSave ? "150px" : "60px",
            }}
            onClick={() => setSaveActive(!saveActive)}
            onMouseOver={() => setSlideBtnSave(true)}
            onMouseLeave={() => setSlideBtnSave(false)}
          >
            <div className="cercle_btn_container card_save">
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
          </div>
        )}
        {showBtn && (
          <div className="card__gender">
            <div className="card_gender_container">
              <p>HIP-HOP • TRAP • CLOUD RAP • RNB • DRILL</p>
            </div>
          </div>
        )}
        <div className="card__name">
          <h4>{artistName}</h4>
        </div>
        <div className="card__image">
          <img src={`assets/artistes/${artistImageUrl}`} alt="artiste image" />
        </div>
      </div>
    </article>
  );
};

export default Card;
