import React, {useState, useEffect} from 'react';
import { ImagesData }  from "./imagesData";
import SlideContent from "./SlideContent";
import Arrows from './Arrows';
import Dots from './Dots';

const len = ImagesData.length - 1;
const Slidecontainer = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    },[activeIndex])

    // console.log(activeIndex);

    return (
        <div className="slider-container">
            <SlideContent activeIndex={activeIndex} images={ImagesData}/>
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots 
                activeIndex={activeIndex} 
                images={ImagesData} 
                onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    );
}

export default Slidecontainer;
