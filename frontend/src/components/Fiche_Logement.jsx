
//import Accordion_logement from "./Accordion/Accordion_Logement";
import data from '../backend/data.json'; // importation du fichier data.json
import '../styles/Fiche_logement.css';
import Caroussel from "./Caroussel/Caroussel";
function Fiche_Logement() {
  return (
    <>
      
      <Caroussel />
    </>
  );
}
export default Fiche_Logement;

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la fiche logement.
