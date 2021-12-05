import React from "react";
import Card from "../Card/Card";
import { ICardItem, ICards } from "../../decl";
import "./ListCard.css";

export interface CardsProps {
  cards: ICards | undefined;
}

const ListCard = ({ cards }: CardsProps) => {
  return (
    <section id="ListCard"className="section cards__list">
      <div className="cards_list_wrap container">
        <div className="section__title">
          <h1>{cards?.title}</h1>
        </div>
        <div className="cards_list_block">
          <div className="cards_list_container">
            {cards?.items.map((card: ICardItem) => {
              return (
                <Card
                  key={card.id}
                  urlSuffixe={cards?.urlSuffixe}
                  cardItem={card}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="list_card_bg cercle">
        <img
          src={process.env.PUBLIC_URL + "assets/imgs/cercle_bg_b.png"}
          alt="forme"
        />
      </div>
      <div className="list_card_bg rectangle">
        <img
          src={process.env.PUBLIC_URL + "assets/imgs/rectangle_bg_b.png"}
          alt="forme"
        />
      </div>
    </section>
  );
};

export default ListCard;
