import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './Hero.css'
import Navbar from "./Navbar";
const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  const Gotocomplaints = () => {
    navigate("/complaintregister");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="bg-gradient-to-br pb-[5vh] from-gray-100 to-gray-300 overflow- px-6 flex flex-col justify-between items-center w-full h-[full]">
      {/* Header Section */}
   <Navbar/>

      {/* Main Content */}
      <div className="flex flex-col gap-6 items-center w-full px-4 md:px-10">
        {/* Title */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-extrabold text-gray-800"
        >
          #AchievePeakAlak
        </motion.p>

        {/* Feature Sections */}
        {[
          {
            title: "COMPLAINTS",
            description:
              "Have an issue? Let us know! Facing any problems? We're here to help. Register your complaint here!",
            button: "Register",
            onClick: Gotocomplaints,
          },
          {
            title: "OTT BOOKINGS!",
            description:
              "Your favorite entertainment, Book your OTT access seamlessly and enjoy unlimited streaming.",
            button: "View",
          },
          {
            title: "BOOKING",
            description:
              "Plan your next big experience! Reserve your spot for upcoming shows, events, and activities.",
            button: "Start",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[70%] py-6 px-6 bg-white shadow-lg rounded-2xl"
          >
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h1>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={item.onClick}
                className="bg-black text-white rounded-xl px-6 py-2 hover:bg-gray-800 transition"
              >
                {item.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
