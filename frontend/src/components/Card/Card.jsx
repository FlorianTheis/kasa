import './Card.css';
import Logements from '../../Data/data.json'; // importation du fichier data.json
import { Link } from 'react-router-dom';

function Card() {
  return (
    <main>
      <section className="Gallery">
        <div className="section__cards" >
          {Logements.map((l) => (
            <Link key={l.id} to={`/Accommodation/${l.id}`}>
            <div className="card" >
              
                <div
                  className="card__pictures"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${l.cover})`,
                  }}
                >
                  <p className="card__title">{l.title}</p>
                </div>
            </div>
                </Link>
            
            
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
