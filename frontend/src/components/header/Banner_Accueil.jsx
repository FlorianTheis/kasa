import '../../../src/styles/Banner.css';
import Banner_AC from '../../assets/Banner_Accueil.png';

function Banner_Accueil() {
  return (
    <header>
    <section className="section">
      <img
        src={Banner_AC}
        alt="paysage nature"
        className="section__Banner"
      ></img>
      <div className="section__p">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </section>
    </header>
  );
}

export default Banner_Accueil;


// Ce fichier comprend le composant pour la bannière de la page d'accueil