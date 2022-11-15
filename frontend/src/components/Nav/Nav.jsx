import './Nav.css';
import { Link } from 'react-router-dom';


import LogoKasa from '../../assets/logo_kasa.png'; 

function Nav() {
  return (
    <nav>
      <div className='header__nav'>
        <div className='header__logo'>
          <img src={LogoKasa} alt="lettre K" className='header__Kasa'></img>
        </div>
        <div className="navBar">
          <Link to="/" className='navHome '>Accueil</Link>
          <Link to="/Apropos" className='navAbout'>A Propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
