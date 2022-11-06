import './AccordionAbout.css';
import { useState } from 'react';
import React from 'react';
import Vector from '../../assets/Vector.png';

// Composant accordion avec comme paramètre le title et le content qu'on a mis dans Apropos.jsx (<Accordion title="" content="" />).
function AccordionAbout({ title, content }) {
  // Const pour initialisé le state, son état initial est "false", le "active" est false.
  const [active, setActive] = useState(false);
  // Fonction fléché handleToggle, lorsqu'on va cliquer, on va faire un setActive (!active)

  const handleToggle = () => {
    // Si "active" est différent de false, (!active) donc si il est vrai la class s'active.
    setActive(!active);
  };
  return (
    // Si active est true alors on met la class active.
    <div className={`accordion ${active && 'active'}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title}{' '}
        <img src={Vector} alt="Vector logo" className="accordion__icone"></img>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default AccordionAbout;
