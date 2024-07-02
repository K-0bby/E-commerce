import React, { useState, useEffect } from 'react';
import './index.css';
import BackGroundSlider from './components/BackGroundSlider';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa'
import Cards from './components/Cards';
import Parallax from './components/ParallaxSection';
import Ratings from './components/Ratings';
import Newsletter from './components/Newsletter';

const brands = [
  {
    id: 1,
    img: '/images/brand/1.png',
  },
  {
    id: 2,
    img: '/images/brand/2.png',
  },
  {
    id: 3,
    img: '/images/brand/3.png',
  },
  {
    id: 4,
    img: '/images/brand/4.png',
  },
  {
    id: 5,
    img: '/images/brand/5.png',
  },
  {
    id: 6,
    img: '/images/brand/6.png',
  },
]
function App() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data)
        setFilteredItems(data);

      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }

    fetchData();
  }, []);
// console.log(products)

// filtering function
const filterItems = (category) => {
  const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);

  setFilteredItems(filtered);
  setSelectedCategory(category);
}


// show all products
const showAllProducts = () => {
  setFilteredItems(products);
  setSelectedCategory("all");
}

// sorting function
const handleSortChange = (option) => {
  setSortOption(option);

  // logic for sorting
  let sortedItems = [...filteredItems]

  switch (option) {
    case "A-Z" : sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Z-A" : sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "low-to-high" : sortedItems.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low" : sortedItems.sort((a, b) => b.price - a.price);
      break;
    default :
      break;
  }

  setFilteredItems(sortedItems);
}



  return (
    <main className='max-w-screen-7xl mx-auto'>
      <section className='h-screen'>
        <BackGroundSlider />
      </section>
      <section className='my-14'>
          <div className='flex items-center justify-around flex-wrap gap-4 py-3'>
            {brands.map((brand) => (
              <div key={brand.id}>
                <img src={brand.img} alt='brands' />
              </div>
            ))}
          </div>
      </section>
      <section className='mx-auto'>
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4 px-4 py-10 xl:px-5'>
          <h5 className='text-black text-center text-xl md:-rotate-90  md:p-2 font-semibold py-6 inline-flex italic font-cormorant'>Explore New & Popular Styles</h5>
          <div className='bg-[#ff7f50] w-24 h-[3px] -mt-6 mb-3 md:hidden'></div>
          <div>
            <Link to='/'>
              <img src="/images/new/6.png" alt="hoodie" className='w-full hover:scale-105 transition-all duration-200'/>
            </Link>
          </div>
          <div className='md:w-1/2'>
            <div className='grid grid-cols-2 gap-2'>
              <Link to='/'>
                <img src="/images/new/3.jpg" alt="wrist watch" className='w-full hover:scale-105 transition-all duration-200'/>
              </Link>
              <Link to='/'>
                <img src="/images/new/image4.png" alt="lady in red dress" className='w-full hover:scale-105 transition-all duration-200'/>
              </Link>
              <Link to='/'>
                <img src="/images/new/image3.png" alt="lady in white and gray outfit" className='w-full hover:scale-105 transition-all duration-200'/>
              </Link>
              <Link to='/'>
                <img src="/images/new/image5.png" alt="man in a sweater" className='w-full hover:scale-105 transition-all duration-200'/>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Parallax />     
      <section>
        {/* Products Section */}
        <div className='mt-8 container min-h-screen px-4 py-5 xl:px-5'>
          <h2 className='title'>New Arrivals</h2>
          <div className='bg-[#ff7f50] w-24 h-[3px] mx-auto -mt-5 mb-8'></div>

          {/* Products */}
          <div>
            <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
              <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap font-montserrat '>
                <button onClick={showAllProducts}>All Products</button>
                <button onClick={()=>filterItems("Dress")}>Clothing</button>
                <button onClick={()=>filterItems("Shoe")}>Shoes</button>
                <button onClick={()=>filterItems("Bag")}>Bags</button>
                <button onClick={()=>filterItems("Accessories")}>Accessories</button>
              </div>

              <div className='flex justify-end mb-4 rounded-sm'>
                <div className='bg-black p-2'>
                  <FaFilter className='w-4 h-4 text-white' />
                </div>
                <select id='sort' onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm outline-none font-montserrat '>
                  <option value="default">Default</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </div>
            </div>
              <Cards filteredItems={filteredItems} />
          </div>
        </div>
      </section>
      <Ratings />
      <Newsletter />
    </main>      
  );
}

export default App;
