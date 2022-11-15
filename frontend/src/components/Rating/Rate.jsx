import React from "react";
import Star from '../../assets/Star.png'
import StarEmpty from '../../assets/StarEmpty.png';
import './Rate.css'

function Rate({ logement }) {
const ratingScore = [1, 2, 3, 4, 5];

return (
    <div className="flex">
            {ratingScore.map((ratingElem) =>
                logement >= ratingElem ? (

                    <img src={Star} className="stars" key={ratingElem.toString()} alt='étoile rempli' />
                ) : (

                    <img src={StarEmpty} className="stars" key={ratingElem.toString()} alt='étoile vide' />
                )
            )}
        </div>
)
}

export default Rate;

// utilisation de toString pour convertir la valeur en chaîne (5, 5 étoiles)