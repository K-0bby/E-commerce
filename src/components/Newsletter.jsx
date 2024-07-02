import React from 'react';
import {Link} from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className='bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2 className='title mb-8'>Follow Us For more Products</h2>

        {/* insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/images/insta/img1.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/insta/img3.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/insta/img4.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/insta/img5.png" alt="" />
            </Link>
            {/* <Link to="/">
                <img src="/images/insta/img2.png" alt="" />
            </Link> */}
            {/* <Link to="/">
                <img src="/images/insta/img6.png" alt="" />
            </Link> */}
        </div>

        {/* newletter */}
        <div>
            <h2 className='title mb-8'>Subscribe to our newsletter</h2>
            <form action="/" className='md:w-1/2 mx-auto text-center'>
                <input type="email" name="email" id="email" placeholder='Email Address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4' />
                <input type="submit" value={'Submit'}  className="bg-[#ff7f50] text-white px-6 py-2 rounded-sm cursor-pointer"/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter