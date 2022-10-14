import '../styles/Accueil.css';
import Banner from './header/Banner';
import Card from './main/Card';

function Accueil() {
  return (
    <>
      <Banner />
      <Card />
    </>
  );
}

export default Accueil;

// dans cette fonction accueil, importez tous les composants de la meme manère que "Banner" que l'on souhaite affiché sur la page d'accueil.
// tout ce qu'on veut affiché sur la page d'accueil, importe le dans cette fonction
