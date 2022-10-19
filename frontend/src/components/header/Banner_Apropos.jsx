import '../../../src/styles/Banner.css';
import Banner_AP from '../../assets/Banner_Apropos.png';

function Banner_Apropos() {
    return (
      <header>
      <section className="section">
        <img
          src={Banner_AP}
          alt="paysage nature"
          className="section__Banner"
        ></img>
      </section>
      </header>
    );
  }
  
  export default Banner_Apropos;
  
  // ce fichier comprend le composant de la bannière sur la page A propos.