import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { IArtist, ICardItem, ICards } from "../../decl";
import "./ListCard.css";
import { getArtist } from "../../api";

interface CardsState {
  // cards: ICards | undefined;
  artist: IArtist | any;
}

const ListCard = () => {
  const [appArtist, setAppArtist] = useState<CardsState>();

  const fetchArtist = async () => {
    const artistPage = await getArtist();
    setAppArtist({ artist: artistPage });
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <section id="ListCard" className="section cards__list">
      <div className="cards_list_wrap container">
        <div className="section__title">
          <h1>CHALLENGER</h1>
        </div>
        <div className="cards_list_block">
          <div className="cards_list_container">
            {appArtist?.artist.map((artist: IArtist) => {
              return <Card key={artist.artistId} artistItem={artist} />;
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
