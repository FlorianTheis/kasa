import Accordion_logement from './Accordion/Accordion_Logement';
import data from '../backend/data.json'; // importation du fichier data.json
import '../styles/Fiche_logement.css';
import Caroussel from './Caroussel/Caroussel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tag from './Tag/Tag';


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


const description = logement.description
const title = logement.title
const location = logement.location

  return (
    <body>
      <div>
        {' '}
        <Caroussel logement={logement} /> 
      </div>

<div>
  <h1>{title}</h1>
  <h2>{location}</h2>
  <h3><Tag content5={logement.tags} /> </h3>
</div>


      <div className="Accordion_Logement">
        <Accordion_logement  title="Description" content={description}/>
        <Accordion_logement  title="Equipements" content={<div className='equipments'>
        {data.map((i, index) => (
          <p>{logement.equipments[index]}</p>  
        ))}
        </div>} />
      </div>
    </body>
  );
}
export default Fiche_Logement;

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la fiche logement.
// const equipements sert a récupérer les données "équipement" du logement concerné , same pour description
// use params sert a récupérer l'id du logement concerné pour ensuite récupérer les informations de ce dernier

// Caroussel logement= {logement} utilisation de la propriété (props) déclarer dans le composant caroussel pour éviter de recopier le code de la ligne 10 à 20