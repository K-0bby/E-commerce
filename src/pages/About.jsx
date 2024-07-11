import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
    <Navbar />
      <div className='h-[450px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/blog/5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}
      >
        <div className='w-full h-full'>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-7xl font-bold mt-28 mb-4 font-cormorant italic">About Us</h1>
            {/* <p className="text-gray-200 text-sm w-2/3 mb-4 font-montserrat">Discover our latest collection</p> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-8 xl:px-28">
        <div className="grid grid-cols md:grid-cols-2 mt-11 gap-y-16">
          <h2 className="text-4xl md:text-5xl md:w-2/3 font-semibold text-black font-cormorant italic">From Vision To Vogue: The Birth Of Chic En Vogue</h2>
          <div className="">
            <h6 className="text-xs font-semibold uppercase tracking-[2px] text-black font-montserrat mb-5">Our Story</h6>
            <h4 className="text-xl font-semibold capitalize text-black mb-5 font-cormorant italic">Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Experience of Fashion.</h4>
            <p className="text-gray-400 font-medium font-montserrat text-sm text-left">Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.</p>
          </div>
        </div>
      </div>
      
      <div className='relative h-[700px] xl:px-28 px-4 my-20 bg-black'
      style={{
        backgroundImage: 'url(/images/back.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        objectFit: 'cover' 
      }}
      >
        <div className='absolute inset-0 bg-black opacity-55'></div>
          <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-between object-cover'>
              <div className='md:w-1/2 my-20'>
                  <h6 className='text-gray-100 text-xs font-medium uppercase tracking-[2px] font-montserrat mb-5'>CUSTOMER-CENTRIC APPROACH</h6>
                  <h2 className='text-white text-5xl font-bold mt-2 capitalize mb-6 font-cormorant italic'>Beyond Fashion: Nurturing A Customer-Centric Experience</h2>
                  <p className="text-gray-100 font-medium font-montserrat text-xs text-left leading-5">We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.</p>
              </div>
              {/* <div className='md:w-1/2'></div> */}
          </div>
      </div>

      <div className="container mx-auto py-16 px-8 xl:px-28">
        <h6 className="text-xs font-semibold uppercase tracking-[2px] text-black font-montserrat mb-5">Sustainable Initiative</h6>
          <h2 className="text-4xl md:text-5xl font-semibold text-black font-cormorant italic">Conscious Fashion For A Better Tomorrow</h2>
        <div className="grid grid-cols md:grid-cols-2 mt-11 gap-x-12 gap-y-16">
        <h5 className="text-xl font-semibold capitalize text-black mb-5 font-cormorant italic">We Recognize The Responsibility We Hold In Shaping A More Sustainable Future For Fashion. Our Commitment To Eco-Friendly Practices And Sustainable Fashion Choices Is At The Core Of What We Do..</h5>
          <div className="">
            <p className="text-gray-400 font-medium font-montserrat text-sm text-left">From the careful selection of ethically sourced materials to the implementation of environmentally conscious manufacturing processes, every step we take is a stride toward a greener and more sustainable industry.</p><br />
            <p className="text-gray-400 font-medium font-montserrat text-sm text-left">We prioritize transparency in our supply chain, partnering with suppliers who share our values of fair labor practices and environmental stewardship. Our sustainable fashion choices extend to packaging as well – we use recyclable materials to minimize our environmental footprint. Join us on this journey towards conscious fashion, where style meets responsibility, and every purchase contributes to a brighter, eco-friendly tomorrow.</p>
          </div>
        </div>
      </div>
      
      <div className='relative h-[500px] xl:px-28 px-4 my-20 bg-black'
      style={{
        backgroundImage: 'url(/images/blog/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        objectFit: 'cover' 
      }}
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className='relative z-10 w-full flex flex-col md:flex-row items-center justify-between object-cover'>
              <div className='md:w-1/2'></div>
              <div className='md:w-1/2 my-20'>
                  <h6 className='text-gray-100 text-xs font-medium uppercase tracking-[2px] font-montserrat mb-3'>Explore</h6>
                  <h2 className='text-white text-5xl font-bold mt-2 capitalize mb-3 font-cormorant italic'>
                  Elevate Your Wardrobe, Embrace Timeless Style!</h2>
                  <p className="text-gray-100 font-medium font-montserrat mb-10 text-sm text-left">Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
                  <Link to='/shop' className='bg-transparent border border-[#ff7f50] text-white px-7 py-3 uppercase rounded-sm text-sm font-montserrat '><span class="text-[#ff7f50]">View Collection</span></Link>
              </div>
          </div>
      </div>
      <hr className='w-11/12 mx-auto '/>
      <Footer />
    </div>
  )
}

export default About