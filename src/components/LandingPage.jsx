import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../context/ContextApi";

import CreateNewShortenForLandingPage from "./CreateNewShortenForLandingPage"; // Ensure path is correct
import TestimonialSection from "./TestmonialSection";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [showModal, setShowModal] = useState(false); 

  const dashBoardNavigateHandler = () => {
    navigate("/create-shorten");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-black text-white px-4 sm:px-8 lg:px-14">
      {/* Modal rendering if showModal is true */}
      {showModal && (
        <CreateNewShortenForLandingPage onClose={() => setShowModal(false)} />
      )}

      <div className="flex flex-col lg:flex-row py-12 gap-8 justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            Linklytics Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>

          <p className="text-sm my-5 max-w-xl">
            Linklytics streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Linklytics allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Linklytics today.
          </p>

          <div className="flex gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-amber-500 text-white rounded-md py-2 px-6"
            >
              Manage Links
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setShowModal(true)} // Open modal
              className="border border-btnColor text-white rounded-md py-2 px-6"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[400px] sm:w-[480px] object-cover rounded-md"
            src="/img2.png"
            alt="Illustration"
          />
        </div>
      </div>

      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-roboto font-bold text-3xl text-center mx-auto max-w-4xl"
        >
          Trusted by individuals and teams at the world’s best companies
        </motion.p>

        <div className="pt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 mt-8">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface ensures you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>

        <div className="pt-12">
          <TestimonialSection />
        </div>

      
       
       
      </div>
    </div>
  );
};

export default LandingPage;
