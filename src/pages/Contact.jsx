import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
    <Navbar />
      <div className='h-[450px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/blog/1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover' 
        }}
      >
        <div className='w-full h-full'>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-7xl font-bold mt-28 mb-4 font-cormorant italic">Contact Us</h1>
            {/* <p className="text-gray-200 text-sm w-2/3 mb-4 font-montserrat">Discover our latest collection</p> */}
          </div>
        </div>
      </div>
      
      <div className='container mx-auto py-16 px-8 xl:px-28 text-center flex flex-col justify-center items-center mt-10'>
        <h6 className='uppercase font-montserrat text-xs font-semibold tracking-[2px] mb-5'>Get in Touch</h6>
        <h4 className='font-cormorant italic capitalize font-bold text-3xl  w-1/2 mb-1'>We Value The Connection With Our Community & Customers And Are Here To Assist In Any Way We Can. Feel Free To Reach Out Through The Following Channels:</h4>
      </div>
      <div className='py-16 px-8 xl:px-28 text-center flex flex-col justify-between '>
        <ContactForm />
        <div></div>
      </div>
    </div>
  )
}

export default Contact