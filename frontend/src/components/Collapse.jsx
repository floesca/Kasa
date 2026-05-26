import arrowClosed from '../assets/arrow-closed.png'
import { useState, useRef, useEffect } from 'react'
import './collapse.css'

export function Collapse({ title, content }) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)
    const [height, setHeight] = useState("0px")

    useEffect(() => {
        if (open) {
            setHeight(`${contentRef.current.scrollHeight}px`)
        } else {
            setHeight("0px")
        }
    }, [open])

    return (
        <div className='collapse-list'>
            <div className='collapse-title' >
                <h2>{title}</h2>
                <img 
                src={arrowClosed} 
                alt='toggle arrow' 
                className={open ? "arrow open" : "arrow"}
                onClick={() => setOpen(!open)}
                />
            </div>

            <div
                className="collapse-wrapper"
                ref={contentRef}
                style={{
                    maxHeight: height,
                    overflow: "hidden",
                    transition: "max-height 0.5s ease"
                }}
            >
                <div className="collapse-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapse