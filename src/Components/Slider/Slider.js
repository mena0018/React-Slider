import { useState } from 'react'
import "./Slider.scss"
import BtnSlide from '../BtnSlide/BtnSlide';
import data from "../../data"


export default function Slider() {

    const [indexSlider, setIndexSlider] = useState(1);

    const prevSlide = () => {
        if (indexSlider !== 1)  setIndexSlider(indexSlider - 1)
        else if (indexSlider === 1)  setIndexSlider(data.length)
    }


    const nextSlide = () => {
        if (indexSlider !== data.length) setIndexSlider(indexSlider + 1)
        else if (indexSlider === data.length) setIndexSlider(1)
    }

    
    const changeImg = (index) => setIndexSlider(index);


  return (
        <div className='container-slider'>
            {data.map((item, index) => {
                return (
                    <div key={item.id}
                         className={indexSlider === index + 1 ? "slide active-anim" : "slide" }
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt=""/>
                    </div>
                )
            })}

            <BtnSlide direction="prev" moveSlide={prevSlide}/>
            <BtnSlide direction="next" moveSlide={nextSlide}/>


            <div className="container-dots">
                { Array.from({ length:5 }).map((item, index) => {
                    return <div key={index} onClick={() => changeImg(index + 1)}
                    className={indexSlider === index + 1 ? "dot active" : "dot"}></div>
                })}
            </div>
        </div>
    )
}
