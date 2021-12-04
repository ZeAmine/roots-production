import React, { useState } from "react";
import { ICardItem } from "../../decl";
import "./Card.css";

export interface CardsProps {
  cardItem: ICardItem;
  urlSuffixe: string;
}

const Card = ({ cardItem, urlSuffixe }: CardsProps) => {
  const { id, img, gender, name } = cardItem;

  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [slideBtnLike, setSlideBtnLike] = useState<boolean>(false);
  const [saveActive, setSaveActive] = useState<boolean>(false);
  const [slideBtnSave, setSlideBtnSave] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  return (
    <article
      className="card"
      onMouseOver={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <div className="card__container">
        <div
          className="cercle__btn card_like"
          style={{
            backgroundColor: likeActive
              ? "var(--clr-primary-1)"
              : "var(--clr-primary-3)",
            width: slideBtnLike ? "120px" : "60px",
          }}
          onClick={() => setLikeActive(!likeActive)}
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
              backgroundColor: saveActive ? "var(--clr-primary-1" : "white",
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
              <p>{gender}</p>
            </div>
          </div>
        )}
        <div className="card__name">
          <h4>{name}</h4>
        </div>
        <div className="card__image">
          <img
            src={process.env.PUBLIC_URL + `${urlSuffixe}${img}`}
            alt="card"
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
