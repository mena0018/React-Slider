import React from 'react'
import prevImg from "../../img/icons/left-arrow.svg"
import nextImg from "../../img/icons/right-arrow.svg"
import "./BtnSlide.scss"


export default function BtnSlide({moveSlide, direction}) {

  return (
     <button onClick={moveSlide}
            className={direction === "prev" ? "btn-slide prev" : "btn-slide next"}>

        <img src={direction === "prev" ? prevImg : nextImg} 
              alt="Bouton Suivant/Précédent" 
        />

     </button>
  )
}