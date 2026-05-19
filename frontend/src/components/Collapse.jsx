import arrowClosed from '../assets/arrow-closed.png'
import arrowOpen from '../assets/arrow-open.png'
import { useState } from 'react'

export function Collapse({title, content}) {
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

export default Collapse