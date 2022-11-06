import './Card.css';
import Logements from '../../backend/data.json'; // importation du fichier data.json
import { Link } from 'react-router-dom';

function Card() {
  return (
    <main>
      <section className="Gallery">
        <div className="section__cards">
          {Logements.map((l) => (
            <div className="card" key={l.id}>
              <Link to={`/Accommodation/${l.id}`}>
                <p className="card__title">{l.title}</p>
                <img className="card__pictures" src={l.cover} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Card;

// Le <Link> redirige vers la page logement du "produit" avec le bon ID, je link vers le lien de la page "/fiche_logement"
// + le propre ID du logement pour retombé sur la bonne page (exemple si je clique sur le logement 1, je  retombe sur la fiche du logement 1 grâce a ${l.id}).
// dans l'URL en haut j'aurais donc "/fiche_logement + l'id du logement concerné".
