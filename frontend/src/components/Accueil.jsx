import '../styles/Accueil.css';
import Card from './main/Card';
import Banner_AC from '../assets/Banner_Accueil.png';

function Accueil() {
  return (
    <div>
      <div className="kasa-Body">
        <div className="section__p">
          <p
            style={{
              backgroundImage: `url(${Banner_AC})`,
            }}
          >
            Chez vous, partout et ailleurs
          </p>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default Accueil;

// dans cette fonction accueil, importez tous les composants de la meme manère que "Banner" que l'on souhaite affiché sur la page d'accueil.
// tout ce qu'on veut affiché sur la page d'accueil, importe le dans cette fonction

// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la page d'accueil.
