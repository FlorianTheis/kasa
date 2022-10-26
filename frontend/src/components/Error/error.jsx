import '../../../src/styles/Error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (
		<div className='Error'>
            <h1 className='Error_h1'>404</h1>
			<div className='Error_paragraphe'>Oups! La page que vous demandez n'existe pas.</div>
			<Link to="/" className='Error_linkBack'>Retourner sur la page d'accueil</ Link >
		</div>
	)
}

export default Error;

// ce fichier comprend le composant pour la page ERROR 404 