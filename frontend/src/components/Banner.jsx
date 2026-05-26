import './banner.css'

export function Banner({image, title, brightness = 1}) {
    return (
        <div className='home-banner'>
            <img 
                src={image} 
                alt='banner Kasa' 
                style={{ filter: `brightness(${brightness})` }}
                />
            {title && (
                <h1 className='title-banner'>{title}</h1>
            )}
        </div>
    )
}

export default Banner