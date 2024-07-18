import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa'
import ShopCard from '../components/ShopCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/shop.json");
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
      case "A-Z": sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A": sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high": sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low": sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  }


  return (
    <div>
      <Navbar />
      <div className='h-[350px] relative overflow-hidden w-full'
        style={{
          backgroundImage: 'url(/images/blog/banner.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', 
          objectFit: 'cover'
        }}
      >
        <div className='w-full h-full'>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-5xl font-bold mt-28 mb-4 font-cormorant italic">Shop</h1>
            <p className="text-gray-200 text-sm w-2/3 mb-4 font-montserrat">Discover our latest collection</p>
          </div>
        </div>
      </div>


      <h2 className='title'>Latest Collection</h2>
      <div className='bg-[#ff7f50] w-24 h-[3px] mx-auto -mt-5 mb-8'></div>

      <div className='container xl:px-28'>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap font-montserrat '>
            <button onClick={showAllProducts}>All Products</button>
            <button onClick={() => filterItems("Men")}>Men</button>
            <button onClick={() => filterItems("Women")}>Women</button>
            <button onClick={() => filterItems("Unisex")}>Unisex</button>
            {/* <button onClick={() => filterItems("Accessories")}>Accessories</button> */}
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
        <ShopCard filteredItems={filteredItems} />
      </div>
      <div>
      <hr className='w-10/12 mx-auto my-10'/>
        <Footer />
      </div>
    </div>
  )
}

export default Shop