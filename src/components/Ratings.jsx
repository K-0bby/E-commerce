import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// import {Link} from 'react-router-dom';

const Rating = () => {
  return (
    <div className='relative h-[580px] bg-[url("/public/images/banner/2.jpg")] bg-fixed bg-cover xl:px-28 px-4 bg-center bg-no-repeat mt-20 object-cover'>
       <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 w-full flex items-center justify-center '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper my-14 md:my-24 w-full md:w-2/3"
        >
           <SwiperSlide>
            <div className='p-8 '>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((star, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                ))}
              </div>
              <h4 className='text-xl leading-6 capitalize md:text-2xl text-center text-white font-bold font-cormorant italic'>”Chic En Vogue Is My Fashion Sanctuary! The Curated Collection Effortlessly Blends Chic Trends With Timeless Elegance, Making Every Purchase A Delightful Discovery. The Quality Of Their Pieces Is Unmatched, And I Appreciate The Brand's Commitment To Sustainable Fashion. What Truly Sets Chic En Vogue Apart Is Their Customer-Centric Approach.”
              </h4>
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center font-montserrat'>-SARAH M., DEVOTED Chic En Vogue FAN</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-8'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((star, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                ))}
              </div>
              <h4 className='text-xl leading-6 capitalize md:text-2xl text-center text-white font-bold font-cormorant italic'>”Chic En Vogue Is My Fashion Sanctuary! The Curated Collection Effortlessly Blends Chic Trends With Timeless Elegance, Making Every Purchase A Delightful Discovery. The Quality Of Their Pieces Is Unmatched, And I Appreciate The Brand's Commitment To Sustainable Fashion. What Truly Sets Chic En Vogue Apart Is Their Customer-Centric Approach.”
              </h4>
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center font-montserrat'>-SARAH M., DEVOTED Chic En Vogue FAN</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-8'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((star, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                ))}
              </div>
              <h4 className='text-xl leading-6 capitalize md:text-2xl text-center text-white font-bold font-cormorant italic'>”Chic En Vogue Is My Fashion Sanctuary! The Curated Collection Effortlessly Blends Chic Trends With Timeless Elegance, Making Every Purchase A Delightful Discovery. The Quality Of Their Pieces Is Unmatched, And I Appreciate The Brand's Commitment To Sustainable Fashion. What Truly Sets Chic En Vogue Apart Is Their Customer-Centric Approach.”
              </h4>
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center font-montserrat'>-SARAH M., DEVOTED Chic En Vogue FAN</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-8'>
              <div className='flex justify-center mb-4'>
                {[...Array(5)].map((star, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500' />
                ))}
              </div>
              <h4 className='text-xl leading-6 capitalize md:text-2xl text-center text-white font-bold font-cormorant italic'>”Chic En Vogue Is My Fashion Sanctuary! The Curated Collection Effortlessly Blends Chic Trends With Timeless Elegance, Making Every Purchase A Delightful Discovery. The Quality Of Their Pieces Is Unmatched, And I Appreciate The Brand's Commitment To Sustainable Fashion. What Truly Sets Chic En Vogue Apart Is Their Customer-Centric Approach.”
              </h4>
              <h6 className='mt-4 text-xs md:text-sm uppercase text-white text-center font-montserrat'>-SARAH M., DEVOTED Chic En Vogue FAN</h6>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Rating