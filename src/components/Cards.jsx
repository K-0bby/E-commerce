import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center'>
        {
            filteredItems.slice(0, 8).map((item) => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.image} alt="products"  className='mx-auto w-full md:h-[400px] hover:scale-105 transition-all duration-300 object-cover'/>
                    </Link>
                    <div className='mt-4 px-4'>
                        <h4 className='text-base font-semibold mb-2 font-montserrat '>{item.title}</h4>

                        <div className='flex justify-between items-center'>
                            <p className='text-black/50 font-montserrat '>{item.category}</p>
                            <p className='font-bold text-gray-400 font-montserrat '>${item.price}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards