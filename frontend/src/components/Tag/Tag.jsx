import './Tag.css';
import React, { useEffect, useState } from 'react';

function Tag({ logement }) {
  // props logement pour pas copié le code de UseParams etc qui se trouve sur la fiche-logement.
  const tag = logement.tags;
  const Tag_map = tag.map((e, index) => (
    <p className="tag__p">{logement.tags[index]}</p>
  ));
  return <div className="tag">{Tag_map}</div>;
}

export default Tag;
