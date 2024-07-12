import React from 'react';
import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Facebook, Instagram, Twitter, Linkedin} from 'lucide-react'
const Footer = () => {
const currentYear = new Date().getFullYear();
    return (   
      <footer>
          {/* footer top */}
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-10">
          <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* company info */}
            <div className="md:w-[300px]">
              <Link to="/">
                <h2 className='font-bold text-3xl tracking-[3px] font-cormorant text-black italic'>Chic</h2>
                <h6 className='font-montserrat text-xs'>En Vogue</h6>
                <div ></div>
                {/* <img src="/logo.svg" alt="" /> */}
              </Link>
              <p className="my-6 text-black/65 font-montserrat">
              Explore our stylish and contemporary collections, curated to offer you the finest in haute couture. 
              </p>
              {/* <div className="flex items-center gap-6">
                <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              </div> */}
              <div className="flex items-center gap-6">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              </div>
            </div>
  
            {/* Catalog */}
            <div>
              <h4 className="font-semibold font-cormorant text-black mb-3">CATALOG</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Bags
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Clothing
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Shoes
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Accessories
                </Link>
                {/* <Link to="/" className="text-sm block hover:text-orange-500">
                  
                </Link> */}
              </div>
            </div>
  
            {/* CUSTOMER SERVICES */}
            <div>
              <h4 className="font-semibold text-black font-cormorant mb-3">CUSTOMER SERVICES</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm text-gray-400 block hover:text-orange-500">
                  Contact Us
                </Link>
                <Link to="/" className="text-sm text-gray-400 block hover:text-orange-500">
                  Track Your Order
                </Link>
                {/* <Link to="/" className="text-sm text-gray-400 block hover:text-orange-500">
                  Product Care & Repair
                </Link> */}
                <Link to="/" className="text-sm  text-gray-400 block hover:text-orange-500">
                  Shipping & Returns
                </Link>
              </div>
            </div>
  
            {/* ABOUT US */}
            <div>
              <h4 className="font-semibold text-black font-cormorant mb-3">ABOUT US</h4>
              <div className="space-y-2">
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Our Producers
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Sitemap
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  FAQ
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  About Us
                </Link>
                <Link to="/" className="text-sm font-montserrat text-gray-400 block hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* footer bottom */}
        <div>
            <Link to="/" className="flex justify-center items-end">
                    <img src="/images/payment.png" alt="payment methods" className='object-cover'/>
            </Link>
        </div>
        <div>
            <p className="text-gray-400 text-center items-center py-3">© {currentYear} Chic En Vogue</p>
        </div>
      </footer>
  )
}

export default Footer