import '../styles/A_propos.css';
import React, { useState } from 'react'; // on importe le fichier css aproprié a Cart pour pourvoir effectuer les modifications
import { useEffect } from 'react';

function A_propos() {
  const [count, setCount] = useState(0);
  const data = require('../backend/data.json');
  console.log(data);
  useEffect(( ) =>{
  
  }, [count]);
  return (
    <div>
      <h1>A propos 🧮</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 7)}>Click me</button>
    </div>
  );
}

export default A_propos;
// permet d'exporter le fichier dans d'autres fichier
