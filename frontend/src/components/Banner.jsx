export function Banner({image, title}) {
    return (
        <div className='home-banner'>
            <img src={image} alt='banner Kasa' />
            {title && (
                <h1 className='title-banner'>{title}</h1>
            )}
        </div>
    )
}

export default Banner