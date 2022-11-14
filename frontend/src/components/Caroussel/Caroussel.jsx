// import data from '../../Data/data.json'; // importation du fichier data.json
// import React, { useState } from 'react';
// import 'react-slideshow-image/dist/styles.css';
// import './Caroussel.css';
// import VectorRight from '../../assets/Vector_Right.png';
// import VectorLeft from '../../assets/Vector_Left.png';

// console.log('data', data);

// function Caroussel({ logement }) {
//   //props logement pour la reutiliser et simplifier le code (pas besoin de remettre useparams etc vu qu'il est dans la
//   // fonction fiche logement)

//   ////////////////////CURRENT-IMAGE////////////////////

//   const [current, setCurrent] = useState(0);
//   const length = logement.pictures.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (logement.pictures.length <= 0) {
//     return null;
//   }

//   console.log(current);

//   ////////////////////RETURN////////////////////

//   // un IF, ELSE pour dire que si il y'a qu'une seule image au logement renvoyer l'image sans les chevrons (car 1 image) 
//   // et sinon (plus d'une image, renvoyez le slideShow avec les chevrons pour changer d'image)
//   if (logement.pictures.length === 1) {
//     return (
//       <div className="slider">
//         {logement.pictures.map((l, index) => {
//           return (
//             <div
//               className={index === current ? 'slide active' : 'slide'}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={logement.pictures[index]}
//                   alt="img"
//                   className="imageOfSlider"
//                 />
//               )}
//               {/* le "compteur" , current (l'image actuel + 1) par / length (le nombre d'images total du logement) */}
//               {index === current && (
//                 <span className="slide__number">
//                   {current + 1}/{length}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return (
//       <div className="slider">
//         <img
//           src={VectorLeft}
//           alt="flèche vers la droite"
//           className="left-arrow"
//           onClick={prevSlide}
//         />
//         <img
//           src={VectorRight}
//           alt="flèche vers la gauche"
//           className="right-arrow"
//           onClick={nextSlide}
//         />
//         {logement.pictures.map((l, index) => {
//           return (
//             <div
//               className={index === current ? 'slide active' : 'slide'}
//               key={index}
//             >
//               {index === current && (
//                 <img
//                   src={logement.pictures[index]}
//                   alt="img"
//                   className="imageOfSlider"
//                 />
//               )}
//               {/* le "compteur" , current (l'image actuel + 1) par / length (le nombre d'images total du logement) */}
//               {index === current && (
//                 <span className="slide__number">
//                   {current + 1}/{length}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Caroussel;


import data from '../../Data/data.json'; // importation du fichier data.json
import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Caroussel.css';
import 'react-slideshow-image/dist/styles.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

console.log('data', data);

function Caroussel({ logement }) {
  //props logement pour la reutiliser et simplifier le code (pas besoin de remettre useparams etc vu qu'il est dans la
  // fonction fiche logement)

  ////////////////////CURRENT-IMAGE////////////////////

  const [current, setCurrent] = useState(0);
  const length = logement.pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (logement.pictures.length <= 0) {
    return null;
  }

  console.log(current);

  ////////////////////RETURN////////////////////

  // un IF, ELSE pour dire que si il y'a qu'une seule image au logement renvoyer l'image sans les chevrons (car 1 image) 
  // et sinon (plus d'une image, renvoyez le slideShow avec les chevrons pour changer d'image)
  if (logement.pictures.length === 1) {
    return (
      <div className="slider">
        {logement.pictures.map((l, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <img
                  src={logement.pictures[index]}
                  alt="img"
                  className="imageOfSlider"
                />
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className='slider'>
            {logement.pictures.map((l, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <div className="imageOfSlider" 
                            style={{
                                backgroundImage: `url(${(logement.pictures[index])})`
                            }}>
                                <FiChevronLeft className="left-arrow" onClick={prevSlide}/>
                                {index=== current && (
                                    <span className="slide__number">
                                        {current +1}/{length}
                                    </span>
                                )}
                                <FiChevronRight className="right-arrow" onClick={nextSlide}/>
                        </div>
                        )}
                    </div>
                )
            })}
            </div>
    );
  }
}

export default Caroussel;