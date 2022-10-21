import '../../../src/styles/Accordion_Apropos.css';
import { useState } from 'react';
import React from 'react';
import Vector from '../../assets/Vector.png';

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className={`accordion ${active && 'active'}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title}{' '}
        <img src={Vector} alt="Vector logo" className="accordion__icone"></img>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Accordion;
