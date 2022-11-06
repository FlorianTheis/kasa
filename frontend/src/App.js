import Home from './Pages/Home/Home' // import de la page d'accueil
import About from './Pages/About/About'; // page A Propos
import Nav from './components/Nav/Nav'; // de la navigation
import Error from './Pages/Error/Error'; // de la page d'erreur
import Footer from './components/Footer/Footer'; // du footer

import { Routes, Route } from 'react-router-dom';
import Accommodation from './Pages/Accomodation/Accommodation';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Accommodation/:id" element={<Accommodation />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

//<Footer />

// l'étoile sur la route Error signifie nimporte quel route, si je tape /fff par exemple je retombe sur l'erreur 404

// ce fichier comprend notre composant ou toutes nos routes sont présentes, la NavBar, notre page d'accueil avec son path exact, la page A propos etc... ce composant APP
// est importer dans index.js le fichier qui se trouve à la racine de notre projet.
