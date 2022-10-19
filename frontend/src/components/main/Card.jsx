import '../../../src/styles/Card.css';
import Logements from '../../backend/data.json'; // importation du fichier data.json

function Card() {
  return (
    <main>
      <section className="Section">
        <div className="box4">
          {Logements.map((l) => (
            <div className="box box2" key={l.id}>
              <p className="box__p">{l.title}</p>
              <img className="box__pictures" src={l.cover} alt="" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Card;
