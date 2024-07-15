import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
// import { Facebook, Instagram, Twitter} from 'lucide-react'
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram, FaTwitter } from "react-icons/fa"

const info = [
  {
    title: 'Phone',
    description: '(233)54889921'
  },
  {
    title: 'Email',
    description: 'ChicEnVogue@mail.com'
  },
  {
    title: 'Address',
    description: 'Accra Ghana'
  },
  // {
  //   title: 'Follow Us', 
  //   description:  
  // }
]

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
        <h4 className='font-cormorant italic capitalize font-bold text-3xl  md:w-1/2 mb-1'>We Value The Connection With Our Community & Customers And Are Here To Assist In Any Way We Can. Feel Free To Reach Out Through The Following Channels:</h4>
      </div>
      <div className='py-16 px-8 xl:px-28 text-center grid grid-cols md:grid-cols-2 justify-between gap-20'>
        <ContactForm />
        <div>
          <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6 text-left">
              <div className="flex-1">
                <p className="text-gray-400 text-xs uppercase font-montserrat">{item.title}</p>
                <h3 className="text-xl font-cormorant italic">{item.description}</h3>
              </div>
              </li>
              })}
            </ul>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default Contact