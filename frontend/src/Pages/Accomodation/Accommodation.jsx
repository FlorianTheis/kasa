import AccordionAccommodation from '../../components/Accordion/AccordionAccommodation';
import data from '../../backend/data.json'; // importation du fichier data.json
import './Accommodation.css';
import Caroussel from '../../components/Caroussel/Caroussel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Error from '../Error/Error';
import Rate from '../../components/Rating/Rate';

function Accommodation() {
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: '',
    host: { name: '', picture: '' },
  });
  const { id } = useParams();

  useEffect(() => {
    data.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  // dans un IF si le id est incorrect (undefined) on renvoie le client vers la page error404 (gérer l'id en cas d'erreur), dans le return on met notre composant Error
  if (logement.id === undefined) {
    return <Error />;
  }

  //on créee une constante pour récupérer la description du logement.
  const description = logement.description;
  // on créee une constante pour récupérer le titre du logement.
  const title = logement.title;
  // on créee une constante pour récupérer la location du logement.
  const location = logement.location;

  // on crée une constante pour récupérer les équipments du logement actuel (logement.equipments)
  const logementEquipments = logement.equipments;
  // on crée une constante ou on va effectuer un .map pour récupérer les élements equipments (seulement ceux besoin si 3, juste 3 et pas 20 (3+17lignes vides))
  const equipments_map = logementEquipments.map((e, index) => (
    <p className="equipments">{logement.equipments[index]}</p>
  ));

  //on crée une constante pour récupérer les host (nom prénom) du logement actuel qu'on introduit ensuite dans le return plus bas ( {hostName} )
  const hostName = logement.host.name;

  // on créer une constante pour récupérer les photos des host du logement actuel qu'on intoduit ensuite dans le return plus bas ( {hostPicture})
  const hostPicture = logement.host.picture;



  return (
    <div>
      <div>
        {' '}
        <Caroussel logement={logement} />
      </div>

      {/* on créee une section qui prend en compte 2 div , une div pour titre / location / tags du logement et une pour la photo / nom / étoiles(note) du logement */}
      <section className="infos__logement">
        {/* TLT pour 'title_location_tags' */}
        <div className="TLT">
          <h1 className="TLT__title">{title}</h1>
          <h2 className="TLT__location ">{location}</h2>
          <h3>
            <Tag logement={logement} />
          </h3>
        </div>
        {/* NPR pour 'name_picture_ratings' */}
        <div>
          <div className="NPR">
            <h1 className="NPR__name">{hostName}</h1>
            <img
              className="NPR__picture"
              src={hostPicture}
              alt="Visage d'une personne"
            ></img>
          </div>
          <div className='NPR__rating'>
            {/* on déclare la props logement pour l'appeler dans le composant Rating pour que le rating = au bon logement(id) function Rate({ logement }) */}
            <Rate logement={logement.rating} />
          </div>
        </div>
      </section>

      <div className="Accordion_Logement">
        <AccordionAccommodation title="Description" content={description} />
        <AccordionAccommodation title="Equipements" content={equipments_map} />
      </div>
    </div>
  );
}
export default Accommodation;

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la fiche logement.
// const equipements sert a récupérer les données "équipement" du logement concerné , same pour description
// use params sert a récupérer l'id du logement concerné pour ensuite récupérer les informations de ce dernier

// Caroussel logement= {logement} utilisation de la propriété (props) déclarer dans le composant caroussel pour éviter de recopier le code de la ligne 10 à 20
