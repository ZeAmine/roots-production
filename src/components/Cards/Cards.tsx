import React, { FC, useState } from "react";
import ListCard from "../ListCard/ListCard";
import { getCards } from "../../api/index";
import { ICardItems, ICards } from "../../decl";
import "./Cards.css";

export interface CardsProps {
  cards: ICards | undefined;
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <section className="section cards">
      <div className="cards__wrap container">
        <div className="section__title">
          <h1>{cards?.title}</h1>
        </div>
        {cards?.items.map((card: any) => {
          <ListCard key={card.id} {...card} />;
        })}
        {/*<div className="cards__list">*/}
        {/*  <div className="cards_list_container">*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Cards;
