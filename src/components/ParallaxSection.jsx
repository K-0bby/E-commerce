import React from 'react';
import {Link} from 'react-router-dom';

const ParallaxSection = () => {

  return (
    <div className='relative h-[480px] bg-[url("/public/images/banner/parallax.jpg")] bg-cover xl:px-28 px-4 bg-fixed bg-center bg-no-repeat my-20 bg-black object-cover'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-between object-cover'>
            <div className='md:w-1/2 my-10'>
                <h4 className='text-gray-400 uppercase font-bold mt-20 font-montserrat '>Mid season sale</h4>
                <h2 className='text-white text-5xl font-bold mt-2 capitalize mb-6 font-cormorant italic'>Summer Collection Up To 20% Discount</h2>
                <Link to='/shop' className='bg-transparent border border-[#ff7f50] px-7 py-3 uppercase rounded-sm text-sm font-montserrat hover:bg-[#ff7f50] text-[#ff7f50] hover:text-white'>View Collection</Link>
            </div>
            <div className='md:w-1/2'></div>
        </div>
    </div>
  )
}

export default ParallaxSection