import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa'
import Cards from '../components/Cards';
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
    <div className='mt-8 container min-h-screen px-4 py-5 xl:px-5'>
        <Navbar />
        <div className="">
            <img src="" alt="" />
        </div>
          <h2 className='title'>New Arrivals</h2>
          <div className='bg-[#ff7f50] w-24 h-[3px] mx-auto -mt-5 mb-8'></div>

        
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
          <div className='mt-3'>
          <Footer />
          </div>
        </div>
  )
}

export default Shop