import '../styles/property.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrow_back from "../assets/arrow_back.png"
import arrow_forward from '../assets/arrow_forward.png'
import { Collapse } from './About'

function Slideshow({ pictures }) {
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

function Property() {
    const { id } = useParams()
    const [property, setProperty] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((item) => item.id === id)
            setProperty(found)
        })
    }, [id])

    if (!property) {
    return <p>Chargement...</p>
    }
  
  return (
    <div>
        <Slideshow pictures={property.pictures}/>

        <div className='properties'>
            <div className='property-header'>
                <div className='property-title-location'></div>
                    <div className='titles'>
                        <h1>{property.title}</h1>
                    </div>

                    <div className='location'>
                        <p>{property.location}</p>
                    </div>
                
                    <div className="tags">
                        {property.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className='host-rating'>
                    <div className="host">
                        <p>{property.host.name}</p>
                        <img src={property.host.picture} alt="host" />
                    </div>

                    <div className="rating">
                        {"★".repeat(property.rating)}
                        {"☆".repeat(5 - property.rating)}
                    </div>
                </div>
            </div>

            <div className='collapse'>
                <div className='description'>
                    <Collapse
                        title="Description"
                        content={property.description}
                    />
                </div>

                <div className='equipments'>
                    <Collapse
                        title="Equipements"
                        content={
                        <ul>
                            {property.equipments.map((item) => (
                            <li key={item}>{item}</li>
                            ))}
                        </ul>
                        }
                    />
                </div>
            </div>
        </div>
    
  )
}

export default Property