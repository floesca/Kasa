import '../styles/home.css'
import banner from '../assets/banner.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Banner() {
    return (
        <div className='home-banner'>
            <img src={banner} alt='banner Kasa' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

function PropertyCard({ property }) {
    return (
        <Link to={`/property/${property.id}`} className="property-card">
            <img 
                src={property.cover} 
                alt={property.title} 
                className="property-image" 
            />
            <h2>{property.title}</h2>
        </Link>
    )
}



function Home() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
    }, [])

    return (
        <div>
            <Banner />

            <div className="property-list">
                {properties.map(prop => (
                <PropertyCard 
                    key={prop.id} 
                    property={prop} 
                />
                 ))}
            </div>
        </div>
    )
}

export default Home