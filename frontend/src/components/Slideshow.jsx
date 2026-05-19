import arrow_back from "../assets/arrow_back.png"
import arrow_forward from '../assets/arrow_forward.png'
import { useState } from 'react'

export function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
    setIndex((prev) => (prev + 1) % pictures.length)
    }

    const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    )
    }

    return (
        <div className='slideshow'>
            {pictures.length > 1 && (
            <img 
                src={arrow_back} 
                onClick={prevSlide} 
                className='arrow-back'
            />
            )}

            <img
                className='slideshow-pictures'
                src={pictures[index]}
                alt="logement"
            />

            {pictures.length > 1 && (
            <img 
                src={arrow_forward} 
                onClick={nextSlide} 
                className='arrow-forward'
            />
            )}

            {pictures.length > 1 && (
            <p className="slide-counter">
                {index + 1} / {pictures.length}
            </p>
            )}
        </div>
    )
}

export default Slideshow