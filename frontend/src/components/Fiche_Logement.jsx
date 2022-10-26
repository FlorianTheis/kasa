import Caroussel from "./Caroussel/Caroussel";
import Accordion_logement from "./Accordion/Accordion_Logement";
import Logements from '../backend/data.json'; // importation du fichier data.json



function Fiche_Logement() {
    const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
    return(
        <div>
            < Caroussel />
            <Accordion_logement
          title="lol"
          content={Logements.map((l) => (
              <div key={l.pictures}>
                <p> {l.equipments === l.id}</p>
             </div>
          ))}
        />
        </div>
    )
}

export default Fiche_Logement;

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la fiche logement.