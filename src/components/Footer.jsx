import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import footer from '../assets/asset 17.png';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Contact Us Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="mb-1">Need Help? Call Us:</p>
          <p className="mb-1">
            <a href="tel:+0892298228" className="hover:text-[#0068C8] text-2xl font-bold">+08 9229 8228</a>
          </p>
          <p className="mb-1">Find a location nearest you.</p>
          <p className="mb-1">
            See <a href="#" className="underline hover:text-[#0068C8]">Our Stores</a>
          </p>
          <p>
            <a href="mailto:Support1234@Ecomall.com" className="hover:text-[#0068C8]">Support1234@Ecomall.com</a>
          </p>
        </div>

        {/* About Us Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <div className="space-y-1">
            <a href="#" className="hover:text-[#0068C8]">About Us</a>
            <a href="#" className="hover:text-[#0068C8]">News & Blog</a>
            <a href="#" className="hover:text-[#0068C8]">Brands</a>
            <a href="#" className="hover:text-[#0068C8]">Press Center</a>
            <a href="#" className="hover:text-[#0068C8]">Advertising</a>
            <a href="#" className="hover:text-[#0068C8]">Investors</a>
          </div>
        </div>

        {/* Order Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Order</h3>
          <div className="space-y-1">
            <a href="#" className="hover:text-[#0068C8]">Check Order</a>
            <a href="#" className="hover:text-[#0068C8]">Delivery & Pickup</a>
            <a href="#" className="hover:text-[#0068C8]">Returns</a>
            <a href="#" className="hover:text-[#0068C8]">Exchanges</a>
            <a href="#" className="hover:text-[#0068C8]">Developers</a>
            <a href="#" className="hover:text-[#0068C8]">Product Recalls</a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="p-4 flex flex-col items-start">
          <h3 className="text-lg font-bold mb-2">Sign Up For Newsletter & Get 20% Off</h3>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              className="w-full rounded-l-lg py-2.5 bg-gray-100 text-gray-700 md:rounded-r-none md:w-2/3"
              placeholder="Your email address"
            />
            <button className="bg-[#0068C8] border-[#0068c8] rounded-r-lg py-2.5 w-full md:w-1/3 text-white font-semibold">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><FiFacebook /></a>
            <a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuTwitter /></a>
            <a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuInstagram /></a>
            <a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><ImPinterest2 /></a>
          </div>
          <div className="mt-4">
            <img src={footer} alt="Footer Visual" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <hr className="bg-gray-500 my-6" />

      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {['Accessories', 'Apple iphone', 'Camera & Video', 'Cellphone', 'Desktop Computers', 'Electronic', 'Game', 'Gaming Headsets', 'Headphone', 'iwatch', 'Kids\' Electronics', 'Laptop', 'Mobile & Tablet', 'Panasonic', 'PC Gaming', 'Smartwatches', 'Speaker', 'Tech Accessories', 'Television'].map((item, index) => (
            <a href="#" key={index} className="border border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1">
              {item}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-[#848484] mt-6">&copy; Ecomall. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
