import '../styles/Accueil.css';
import Banner_Accueil from './header/Banner_Accueil';
import Card from './main/Card';



function Accueil() {
  return (
    <>
      <Banner_Accueil />
      <Card />
    </>
  );
}

export default Accueil;

// dans cette fonction accueil, importez tous les composants de la meme manère que "Banner" que l'on souhaite affiché sur la page d'accueil.
// tout ce qu'on veut affiché sur la page d'accueil, importe le dans cette fonction


// ce fichier permet d'importer tous les composants que l'on souhaite afficher sur la page d'accueil.