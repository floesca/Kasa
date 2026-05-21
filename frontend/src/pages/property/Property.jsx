import './property.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Collapse } from '../../components/Collapse'
import { Slideshow } from '../../components/Slideshow'
import { useNavigate } from "react-router"
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Property() {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((item) => item.id === id)
            if (!found) {
                navigate("/errorpage")
            } else {
                setProperty(found)
            }
        })
    }, [id, navigate])

    if (!property) {
    return <div>Chargement...</div>
    }
  
  return (
    <div>
        <Slideshow pictures={property.pictures}/>

        <div className='properties'>
            <div className='property-header'>
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
                        {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={index < property.rating ? starActive : starInactive}
                            alt="star"
                        />
                        ))}
                    </div>
                </div>
        </div>

            <div className='collapse'>
                    <Collapse
                        title="Description"
                        content={property.description}
                    />

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
    
  )
}

export default Property