import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import imageSlide from '../data/data';
import { Link } from 'react-router-dom';

const BackGroundSlider = () => {
  return (
    <div className='h-screen relative overflow-hidden w-full'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        {imageSlide.map((slide, index) => (
          <SwiperSlide key={index} className='w-full h-full'>
            <div
              className='w-full h-full'
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                <h6 className="text-white text-sm uppercase mb-2 font-montserrat">{slide.title}</h6>
                <h1 className="text-white text-5xl font-bold mb-4 font-cormorant italic" dangerouslySetInnerHTML={{ __html: slide.subtitle }}></h1>
                <p className="text-gray-200 text-sm w-2/3 mb-4 font-montserrat">{slide.description}</p>
                <Link to={slide.link} className='bg-transparent border border-[#ff7f50] text-white px-7 py-3 mt-4 uppercase rounded-sm text-sm'>
                  <span className="text-[#ff7f50] font-montserrat">{slide.linkText}</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BackGroundSlider;
