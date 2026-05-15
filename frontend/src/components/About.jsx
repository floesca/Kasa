import { Banner } from './Home'
import bannerAbout from '../assets/banner-about.png'
import '../styles/about.css'
import arrowClosed from '../assets/arrow-closed.png'
import arrowOpen from '../assets/arrow-open.png'
import { useState } from 'react'

function Collapse({title, content}) {
const [open, setOpen] = useState(false)

    return (
        <div className='collapse-list'>
            <div 
                className='collapse-title' 
                onClick={() => setOpen(!open)}
            >

                <h2>{title}</h2>

                <img 
                    src={open ? arrowOpen : arrowClosed}
                    alt='toggle' 
                />
            </div>

            {open && (
                <p>{content}</p>
            )}
        </div>
    )
}

function About() {
    const data = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Service", content: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatiare, cela permet à nos équipes de vérifier que les standardssont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
]

  return (
    <div>
        <Banner 
            image={bannerAbout} />
        
        <div className='collapse-container'>
        {data.map((item, index) => (
        <Collapse
            key={index}
            title={item.title}
            content={item.content}
        />
        ))}
        </div>
    </div>
    
  )
}

export default About