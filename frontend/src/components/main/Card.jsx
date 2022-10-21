import '../../../src/styles/Card.css';
import Logements from '../../backend/data.json'; // importation du fichier data.json
import { Link } from 'react-router-dom';

function Card() {
  return (
    <main>
      <section className="Section">
        <div className="section__cards">
          {Logements.map((l) => (
            <Link to={`/fiche_logement/${l.id}`}>
              <div className="card" key={l.id}>
                <p className="card__title">{l.title}</p>
                <img className="card__pictures" src={l.cover} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Card;

// Le link redirige vers la page logement du "produit" avec le bon ID, je link vers le lien de la page "/fiche_logement"
// + le propre ID du logement pour retombé sur la bonne page (exemple si je clique sur le logement 1, je  retombe sur la fiche du logement 1 grâce a ${l.id}).
// dans l'URL en haut j'aurais donc "/fiche_logement + l'id du logement concerné".
