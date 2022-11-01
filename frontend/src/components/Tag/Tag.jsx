import '../Tag/Tag.css'
import data from '../../backend/data.json'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Tag({content5}) { // props logement pour pas copié le code de UseParams etc qui se trouve sur la fiche-logement.
   
    return(
        <div className='tag'>
         <div className='tag__p'>
         <p className='rr'> {content5}</p>
         </div>
        </div>
    )
}

export default Tag;