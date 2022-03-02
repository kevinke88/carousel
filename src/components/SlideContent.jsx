import React from 'react'

const SlideContent = ({images, activeIndex}) => {
    return (
        <section>
            {
                images.map((image, index) => (
                    <div key={index} 
                    className={index === activeIndex ? "slide active" : "inactive"}
                    >
                        <img src={image.urls} alt={image.title} />
                        <h2 className="slide-title">{image.title}</h2>
                        <h3 className="slide-text">{image.description}</h3>
                    </div>
                ))
            }
        </section>
    )
}

export default SlideContent;