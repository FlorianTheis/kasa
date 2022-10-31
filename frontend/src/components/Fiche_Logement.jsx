import Accordion_logement from './Accordion/Accordion_Logement';
import data from '../backend/data.json'; // importation du fichier data.json
import '../styles/Fiche_logement.css';
import Caroussel from './Caroussel/Caroussel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Fiche_Logement() {

  const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
  const { id } = useParams()
  
  useEffect(() => {
      data.map((house) => {
          if (house.id === id) {
              setLogement(house)
          }
          return null
      })
  }, [id])

const equipements = logement.equipments
const description = logement.description
  


  return (
    <body>
      <div>
        {' '}
        <Caroussel />
      </div>
      <div className="Accordion_Logement">
        <Accordion_logement  title="Description" content={description}/>
        <Accordion_logement  title="Equipements" content={equipements} />
      </div>
    </body>
  );
}
export default Fiche_Logement;

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la fiche logement.
// const equipements sert a récupérer les données "équipement" du logement concerné , same pour description
// use params sert a récupérer l'id du logement concerné pour ensuite récupérer les informations de ce dernier