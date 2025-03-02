import { IoLogoInstagram } from "react-icons/io5"
import { RiTwitterXLine } from "react-icons/ri"
import { TbBrandMeta } from "react-icons/tb"
import { Link } from "react-router-dom"
import { FiPhoneCall } from "react-icons/fi"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-10">
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 ">NewsLetter</h3>
          <p className="text-gray-500 mb-4 ">
            Get the latest updates and offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">Sign up and get 10% off on your first order</p>
          {/* newsletter form */}
          <form action="" className="flex">
            <input type="email" placeholder="Enter your E-Mail" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required  />
            <button type="submit" className="bg-black hover:bg-gray-800 text-white transition-all
            font-bold py-3 px-6 rounded-r-md text-sm ">Subscribe</button>
          </form>
        </div>
        {/* shop links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="list-none mb-4 space-y-2 text-gray-600">
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Men's Top Wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Women's Top Wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Men's Bottom Wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Women's Bottom Wear</Link>
           </li>
          </ul>
        </div>
        {/* support links */}

        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="list-none mb-4 space-y-2 text-gray-600">
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Contact Us</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">About Us</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">FAQs</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-500 transition-colors ">Features</Link>
           </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https//www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <TbBrandMeta className="h-5 w-5"/>
              </a>
            <a href="https//www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <IoLogoInstagram className="h-5 w-5"/>
              </a>
            <a href="https//www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <RiTwitterXLine className="h-4 w-4"/>
              </a>
          </div>
          <p className="text-gray-500 ">
            Call Us
          </p>
          <p>
            <FiPhoneCall className="inline-block mr-2"/>
            <span>+91 8950851680</span>
          </p>
        </div>
      </div>
      {/* footer bottom  */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-center text-gray-500 tracking-tighter">
        &copy; {currentYear} , <span className="text-gray-800 font-semibold ">Threads</span> All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer