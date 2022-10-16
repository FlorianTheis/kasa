import '../../../src/styles/Banner.css';
import ImgBanner from '../../assets/Banner.png';

function Banner() {
  return (
    <header>
    <section className="section">
      <img
        src={ImgBanner}
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

export default Banner;
