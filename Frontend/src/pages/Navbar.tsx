import { motion } from "framer-motion";
import React, { useState } from "react";
import './Hero.css'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="relative w-[100vw]">
      {/* Navbar */}
    <div className="w-full flex  justify-between  align-middle items- py-5 px-[5vw] ">
           {/* Menu Button */}
            <motion.div
                   className={`menu_butn flex flex-col md:pb-[] pt-[vh] px-[vw] z-50 relative ${
                     open ? "-left-[1vw]" : ""
                   }`}
                   animate={{ x: open ? 0 : -20 }}
                   transition={{ duration: 0.5 }}
                 >
                   <div className="demo relative z-999">
                     <motion.div
                       onClick={handleMenuClick}
                       className="menu-icon"
                       whileTap={{ scale: 0.9 }}
                     >
                       <input
                         className="menu-icon__cheeckbox"
                         type="checkbox"
                         checked={open}
                         readOnly
                       />
                       <div>
                         <span></span>
                         <span></span>
                       </div>
                     </motion.div>
                   </div>
             
           </motion.div>
   

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src="" alt="Logo" className="h-10" />
        </motion.div>
      </div>

      {/* Sidebar Menu */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-[100vw] md:w-[40vw] bg-white shadow-lg p-6 flex flex-col gap-4 z-40"
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        {/* Close Button */}
      

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 text-lg font-semibold mt-[10vh] text-gray-800">
          <a href="home" className="hover:text-gray-500 transition">Home</a>
          <a href="booking" className="hover:text-gray-500 transition">Bookings</a>
          <a href="complaintregister" className="hover:text-gray-500 transition">Complaints</a>
          <a href="#" className="hover:text-gray-500 transition">Contact</a>
        </nav>

        {/* <div className="flex justify-center gap-6 pb-6">
          <a href="#" className="text-gray-600 hover:text-blue-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400 text-2xl">
            <FaTwitter />
          </a>
        </div> */}
      </motion.div>

      {/* Overlay (Click to close) */}
       {/* Social Media Icons */}
      
   
    </div>
  );
};

export default Navbar;
