import '../styles/A_propos.css';
import Banner_Apropos from './header/Banner_Apropos';
import Accordion from './main/Accordion_About';

function A_propos() {
  return (
    <>
      <Banner_Apropos />
      <Accordion />
    </>
  );
}

export default A_propos;
// permet d'exporter le fichier dans d'autres fichier
// ce fichier permet d'importer tous les composants que l'on souhaite afficher dans la page A propos.