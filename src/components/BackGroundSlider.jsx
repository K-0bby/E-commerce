import React, { useState, useEffect } from 'react';
import '../index.css';
import imageSlide from '../data/data';
import {Link} from 'react-router-dom';


const BackGroundSlider = () => {
    const[current, setCurrent] = useState(0)
    const length = imageSlide.length

    useEffect (() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [length])
    
  return (
    <div className='h-screen relative overflow-hidden w-full'>
        {imageSlide.map((slide, index) =>(
            <div key = {index} className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
                    <h6 className="text-white text-sm uppercase mb-2 font-montserrat ">{slide.title}</h6>
                    <h1 className="text-white text-7xl font-bold mb-4 font-cormorant italic"  dangerouslySetInnerHTML={{ __html: slide.subtitle }}></h1>
                    <p className="text-gray-200 text-sm w-2/3 mb-4 font-montserrat ">{slide.description}</p>
                    <Link to={slide.link} className='bg-transparent border border-[#ff7f50] text-white px-7 py-3 mt-4 uppercase rounded-sm text-sm'><span class="text-[#ff7f50] font-montserrat ">{slide.linkText}</span></Link>
                </div>  
            </div>
        ))}
    </div>
  )
}

export default BackGroundSlider