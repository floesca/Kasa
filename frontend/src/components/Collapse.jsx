import arrowClosed from '../assets/arrow-closed.png'
import { useState } from 'react'
import './collapse.css'

export function Collapse({ title, content }) {
    const [open, setOpen] = useState(false)

    return (
        <div className='collapse-list'>
            <div className='collapse-title' >
                <h2>{title}</h2>
                <button 
                className="collapse-toggle"
                onClick={() => setOpen(!open)}
                aria-label="toggle collapse"
                >
                    <img 
                    src={arrowClosed} 
                    alt='toggle arrow' 
                    className={open ? "arrow open" : "arrow"}
                    />
                </button>
            </div>

            <div className={`collapse-wrapper ${open ? "open" : ""}`}>
                <div className="collapse-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapse