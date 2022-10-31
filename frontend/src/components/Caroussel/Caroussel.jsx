import data from '../../backend/data.json'; // importation du fichier data.json
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import '../Caroussel/Caroussel.css';
import VectorRight from '../../assets/Vector_Right.png';
import VectorLeft from '../../assets/Vector_Left.png'

console.log('data', data);


function Caroussel() {
  const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()
    
    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null
        })
    }, [id])


////////////////////CURRENT-IMAGE////////////////////

    const [current, setCurrent] = useState(0)
    const length = logement.pictures.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if(logement.pictures.length <= 0) {
        return null
    }

console.log(current)
////////////////////RETURN////////////////////

    return (
        <div className='slider'>
            <img src={VectorLeft} alt="flèche vers la droite" className='left-arrow' onClick={prevSlide}/>
            <img src={VectorRight} alt="flèche vers la gauche"   className='right-arrow' onClick={nextSlide}/>
        {logement.pictures.map((l, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    <img src= {logement.pictures[index]} alt='img' className='imageOfSlider'/>
                    )}
                    
                </div>
            )
        })}
        </div>
    )
}

export default Caroussel;
