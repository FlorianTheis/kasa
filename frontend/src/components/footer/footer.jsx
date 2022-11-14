import './Footer.css';
import LogoFooter from '../../assets/footer_logo.png';

function Footer() {
  return (
    <footer className='Footer'>
      <div className='Footer_imgage_paragraphe'>
        <img className='Footer__img' src={LogoFooter} alt="Logo Kasa"></img>
        <p className='Footer__p'> © 2020 Kasa. All rights reserved </p>
      </div>
    </footer> 
  );
}

export default Footer;

// Ce fichier est composé du footer de notre site