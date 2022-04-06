const FeaturedCharity = (props) => {
    const { image, logo, title, description } = props.charity
    return (
        <div className='d-flex flex-column justify-content-between' style={{ height: '300px', marginRight: '20px' }}>
            <div className='d-flex flex-column'>
                <img className='mb-3 rounded' src={image} alt={title} style={{ height: "150px" }}></img>
                <img className='rounded-circle position-absolute' src={logo} alt={title} style={{ height: "50px", top: '110px', left: '10px' }}></img>
                <span className='fs-6 fontManrope fw-bold' style={{ color: '#187f8c' }}>{title}</span>
                <span className='fontManrope overflow-hidden' style={{ fontSize: '12px', color: '#a2a2a2', maxHeight: '90px' }}>{description}</span>
            </div>
            <span className='cursorPointer fontManrope fw-bold' style={{ fontSize: '13px', color: '#0da052' }}>View</span>
        </div>
    )
}

export default FeaturedCharity