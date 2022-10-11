import '../../../src/styles/Banner.css';
import ImgBanner from '../../assets/Banner.png';

function Banner() {
  return (
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
  );
}

export default Banner;
