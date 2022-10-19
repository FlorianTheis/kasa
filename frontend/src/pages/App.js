import Accueil from '../components/Accueil'; // import du fichier menu
import A_propos from '../components/A_propos';
import Navbar from '../components/header/Navbar';
import Error from '../components/Error/error';
// import Footer from '../components/footer/footer';



import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Accueil/>}/>
        <Route path="/Apropos" element={<A_propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      
    </>
  );
}

export default App;

//<Footer />

// l'étoile sur la route Error signifie nimporte quel route, si je tape /fff par exemple je retombe sur l'erreur 404


// ce fichier comprend notre composant ou toutes nos routes sont présentes, la NavBar, notre page d'accueil avec son path exact, la page A propos etc... ce composant APP 
// est importer dans index.js le fichier qui se trouve à la racine de notre projet.