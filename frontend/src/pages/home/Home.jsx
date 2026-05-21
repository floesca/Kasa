import './home.css'
import banner from '../../assets/banner.png'
import { useState, useEffect } from 'react'
import { Banner } from '../../components/Banner'
import { PropertyCard } from '../../components/PropertyCard'

function Home() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
    }, [])

    return (
        <div>
            <Banner 
                image={banner}
                title="Chez vous, partout et ailleurs"
                className='banner-home' />

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