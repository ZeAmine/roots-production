import React from 'react';


const Card = () => {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__image">
                    <img src={process.env.PUBLIC_URL + "assets/imgs/img1.jpg"} alt="card"/>
                </div>
                <div className="card__like">
                    <button className="btn_like">
                    </button>
                </div>
                <div className="card__info">
                    <div className="card__gender">
                        <p>"HIP-HIP * TRAP * CLOUD RAP * RNB * DRILL"</p>
                    </div>
                    <div className="card__name">
                        <h4>Hamza</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;