import './About.css';
import Banner_AP from '../../assets/AboutBanner.png';
import AccordionAbout from '../../components/Accordion/AccordionAbout';

function About() {
  return (
    <>
    <div className='AboutKasa'>{}
			<img src={Banner_AP} alt='Un paysage montagneux' className='img_about_Kasa' />
		</div>
      <main className="accordions">
        <AccordionAbout
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <AccordionAbout
          title="Respect"
          content="La bienveillance fais partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <AccordionAbout
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <AccordionAbout
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </main>
    </>
  );
}

export default About;
// permet d'exporter le fichier dans d'autres fichier
// ce fichier permet d'importer tous les composants que l'on souhaite afficher dans la page A propos.
