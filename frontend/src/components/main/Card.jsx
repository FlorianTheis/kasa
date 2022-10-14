import '../../../src/styles/Card.css';
import Logements from '../../backend/data.json'; // importation du fichier data.json

function Card() {
  return (
    <section className="Section7">
        <div className='Box'>
      {
        Logements.map( logement => {
            return(
                <div className='box2' key={logement.id}>
                    { logement.title}
                </div>
            )
        })
      }
      </div>
    </section>
  );
}

export default Card;
