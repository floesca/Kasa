import { Link } from 'react-router-dom'

export function PropertyCard({ property }) {
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

export default PropertyCard