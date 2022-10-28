import data from '../../backend/data.json'; // importation du fichier data.json
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../Caroussel/Caroussel.css';

console.log('data', data);
const properties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

function Caroussel() {
  const { id } = useParams();
  console.log('this.context:', id);
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: '',
    host: { name: '', picture: '' },
  });
  console.log('useParams', useParams);
  useEffect(() => {
    data.map((house) => {
      if (house.id === id) {
        //console.log(house)
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  console.log(logement);

  return (
    <div className="containerSlide">
      {
        <Slide {...properties}>
          {logement.pictures.map((l, index) => (
            <div className="each-slide">
              <div className="slidePicture" key={l.id}>
                <img src={logement.pictures[index]} alt="img" />
              </div>
            </div>
          ))}
        </Slide>
      }
    </div>
  );
}

export default Caroussel;
