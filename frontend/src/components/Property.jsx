import '../styles/property.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
        <div>
            <button onClick={prevSlide}>⬅️</button>

            <img
            src={pictures[index]}
            alt="logement"
            />

            <button onClick={nextSlide}>➡️</button>
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
    </div>
  )
}

export default Property