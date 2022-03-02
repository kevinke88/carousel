import React from 'react';

const Dots = ({images, activeIndex, onclick}) => {
    return (
        <div className='all-dots'>
            {
                images.map((image, index) => (
                    <span 
                        key={index}
                        className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                        onClick={() => onclick(index)}
                    ></span>
                ))
            }
        </div>
    );
}

export default Dots;
