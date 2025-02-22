import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Complaints = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomNo: "",
    category: "",
    description: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Complaint submitted:", formData);

    // Clear input fields
    setFormData({ name: "", email: "", roomNo: "", category: "", description: "" });

    // Show popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <motion.div
      className="bg-[#fff] overflow-hidden  w-[100vw] pt-[1vh] flex flex-col justify-between h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navbar */}
<Navbar/>
      {/* Title Section */}
      <motion.div className="px-[5vw]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-3xl font-bold">REGISTER <br /> COMPLAINTS</p>
        <p className="font-light">Register your complaint here...!!</p>
      </motion.div>

      {/* Complaint Form */}
      <motion.div
        className="w-[100vw] px-[5vw] h-[70vh] flex flex-col justify-center items-center bg-[#000] rounded-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.form
          className="flex flex-col justify-center px-[5vw] gap-[2vh] items-center"
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {["name", "email", "roomNo"].map((field, index) => (
            <motion.input
              key={index}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1").trim()}
              value={formData[field]}
              onChange={handleChange}
              className="w-[120%] border-b-2 border-red-100 mb-2 p-2 rounded-lg text-white bg-black"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            />
          ))}
          <motion.select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-[120%] border-b-2 border-red-100 bg-black mb-2 p-2 rounded-lg text-white"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <option value="">Issue Category</option>
            <option value="Technical">Technical</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </motion.select>
          <motion.textarea
            name="description"
            placeholder="Describe your issue"
            value={formData.description}
            onChange={handleChange}
            className="w-[120%] border-b-2 border-red-100 mb-2 p-2 rounded-lg text-white bg-black"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-[#fff] text-black px-[4vw] py-[1vh] rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Complaint Registered Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Complaints;
