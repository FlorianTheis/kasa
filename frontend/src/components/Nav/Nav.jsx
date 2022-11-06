import './Nav.css';
import { Link } from 'react-router-dom';
import A from '../../assets/A.png';
import home from '../../assets/home.png';
import K from '../../assets/K.png';
import S from '../../assets/S.png';
import Door from '../../assets/DoorHome.png';

function Nav() {
  return (
    <nav>
      <div className='header__nav'>
        <div>
          <img src={K} alt="lettre K" className='header__K'></img>
          <img src={home} alt="maison logo" className='header__home '></img>
          <img src={Door} alt="porte logo" className='header__porte '></img>
          <img src={S} alt="lettre S" className='header__S'></img>
          <img src={A} alt="lettre A" className='header__A'></img>
        </div>
        <div className="navBar">
          <Link to="/" className='navBar__accueil '>Accueil</Link>
          <Link to="/Apropos" className='navBar__Apropos'>A Propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
