import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { IArtists } from "../../decl";
import { getArtist } from "../../api";
import "./ListCard.css";

interface CardsState {
  artists: IArtists | any;
}

const ListCard = () => {
  const [appArtist, setAppArtist] = useState<CardsState>();

  const fetchArtist = async () => {
    const artistPage = await getArtist();
    setAppArtist({ artists: artistPage });
    console.log(artistPage);
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  console.log(appArtist);

  return (
    <section id="ListCard" className="section cards__list">
      <div className="cards_list_wrap container">
        <div className="section__title">
          <h1>CHALLENGER</h1>
        </div>
        <div className="cards_list_block">
          <div className="cards_list_container">
            {/*{appArtist?.artists?.map((artist: IArtist) => {*/}
            {/*  return <Card key={artist.artistId} artistItem={artist} />;*/}
            {/*})}*/}
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="MAD"
              artistImageUrl="MAD.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Alexia Gredy"
              artistImageUrl="Alexia.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Rosi"
              artistImageUrl="Rosi.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="YISVS"
              artistImageUrl="YISVS.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Telemona"
              artistImageUrl="Telemona.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="T2ITS"
              artistImageUrl="T2ITS.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Delorians"
              artistImageUrl="Delorians.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="The Dunwells"
              artistImageUrl="The_Dunwells.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Geminibull"
              artistImageUrl="Geminibull.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
            <Card
              artistId={appArtist?.artists?.artistId}
              artistName="Colzani"
              artistImageUrl="Colzani.png"
              artistVotes={appArtist?.artists?.artistVotes}
            />
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
