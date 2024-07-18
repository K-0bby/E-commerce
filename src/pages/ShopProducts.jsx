import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
// import Footer from "../components/Footer";


const demoText = {
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const ShopProduct = () => {

    const {id} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("/shop.json");
              const data = await response.json();
             const product = data.filter((p) => p.id == id)
            //  console.log(product[0])
             setProducts(product[0])
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    }, [id])

    const {image, title, category, price} = products;


  return (
    <div className="mt-5 max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-5">
      <div className="">
        <div className="flex items-center gap-2 pt-8 text-Black/50">
            <Link to="/">Home</Link> <Link to="/shop" className="font-semibold text-black">/ Shop</Link>
        </div>

        <div className="p-3 max-w-7xl m-auto">
            <div className="mt-6 sm:mt-10">
            <div>
            <div>
                <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                {/* Product Image */}
                <div className="overflow-hidden rounded-sm">
                    <img
                    src={image}
                    alt="Product-Image"
                    className="w-full h-full"
                    />
                </div>
                {/* Product Details */}
                <div className="flex flex-col justify-between">
                    <div>
                    {/* Product Title */}
                    <h1 className="text-2xl sm:text-3xl text-md capitalize font-bold text-gray-900 font-cormorant">
                        {title}
                    </h1>
                    {/* Product Description */}
                    <p className="mt-3 text-gray-600 text-md leading-6 text-left sm:text-left sm:mt-4 font-montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                        facilisis mauris sit amet
                    </p>
                    {/* Star Ratings */}
                    <span className="my-3 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                        <FaStar key={index} />
                        ))}
                    </span>
                    {/* Product Price */}
                    <span className="text-xl text-gray-500 font-semibold sm:text-lg">
                        ${price}
                    </span>
                    </div>
                    {/* Quantity Input and Order Button */}
                    <div className=" ">
                    <div className="text-left flex flex-col gap-2 w-full">
                        {/* Quantity Label */}
                        <label className="font-semibold">Quantity</label>
                        {/* Quantity Input */}
                        <input
                        className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-sm m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                        type="number"
                        defaultValue="1"
                        required
                        />
                    </div>
                    {/* Order Button */}
                    <div className="w-full text-left my-4">
                        <button
                        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-orange-400 text-white text-md font-bold border border-orange-400 rounded-sm ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-orange-400 lg:m-0 md:px-6"
                        title="Confirm Order"
                        >
                        <span className="font-montserrat">Add To Cart</span>
                        <FaShoppingCart />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>

        {/* product details */}
        <div className="mt-10">
            <h2 className="text-md font-bold text-gray-900 font-cormorant">Details</h2>

            <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600 font-montserrat">
                {demoText.details} {demoText.details}
            </p>
            </div>
        </div>

        <div className="mt-10">
            <h2 className="text-md font-bold text-gray-900 font-cormorant">Description</h2>

            <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600 font-montserrat">
                {demoText.description} {demoText.description}
            </p>
            </div>
        </div>

        <div className="mt-5">
            <h2 className="text-md font-bold text-gray-900 font-cormorant">Highlights</h2>
            <div className="mt-4 space-y-4 font-montserrat">
            <li className="text-sm text-gray-600">
                {demoText.highlights[0]}
            </li>
            <li className="text-sm text-gray-600">
                {demoText.highlights[1]}
            </li>
            <li className="text-sm text-gray-600">
                {demoText.highlights[2]}
            </li>
            <li className="text-sm text-gray-600">
                {demoText.highlights[3]}
            </li>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
