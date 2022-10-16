import Accueil from '../components/Accueil'; // import du fichier menu
import A_propos from '../components/A_propos';
import Navbar from '../components/header/Navbar';
import Error from '../components/Error/error';



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

// l'étoile sur la route Error signifie nimporte quel route, si je tape /fff par exemple je retombe sur l'erreur 404
