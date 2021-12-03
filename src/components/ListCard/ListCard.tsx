import React, { FC, useState } from "react";
import { useGlobalContext } from "../../context";
import { ICardItems, ICards } from "../../decl";
import "./ListCard.css";

export interface CardsProps {
  cards: ICards | undefined;
}
const ListCard: React.FC<CardsProps> = () => {
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
          className="cercle__btn like"
          style={{
            backgroundColor: likeActive ? "var(--clr-primary-1" : "white",
            width: slideBtnLike ? "110px" : "50px",
          }}
          onClick={() => setLikeActive(!likeActive)}
          onMouseOver={() => setSlideBtnLike(true)}
          onMouseLeave={() => setSlideBtnLike(false)}
        >
          <div className="cercle_btn_container">
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
            className="cercle__btn save"
            style={{
              backgroundColor: saveActive ? "var(--clr-primary-1" : "white",
              width: slideBtnSave ? "150px" : "50px",
            }}
            onClick={() => setSaveActive(!saveActive)}
            onMouseOver={() => setSlideBtnSave(true)}
            onMouseLeave={() => setSlideBtnSave(false)}
          >
            <div className="cercle_btn_container save">
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
        <div className="card__gender">
          <div className="card_gender_container">
            <p>HIP-HOP * TRAP * CLOUD RAP * RNB * DRILL</p>
          </div>
        </div>
        <div className="card__name">
          <h4>Hamza</h4>
        </div>
        <div className="card__image">
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/img2.jpg"}
            alt="card"
          />
        </div>
      </div>
    </article>
  );
};

export default ListCard;
