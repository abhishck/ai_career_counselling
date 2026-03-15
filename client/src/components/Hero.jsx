import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Discover Your Perfect
            <span className="text-yellow-300"> Career Path </span>
            with AI
          </h1>

          <p className="text-lg text-blue-100 mb-8">
            Our AI-powered career counsellor analyzes your interests,
            skills, and personality to recommend the best career paths
            for your future.
          </p>

          <div className="flex gap-4">

            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Start Career Test
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={heroImg}
            alt="AI Career Guidance"
            className="w-full drop-shadow-2xl"
          />

        </motion.div>

      </div>

      {/* FLOATING CIRCLES BACKGROUND */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>

    </section>
  );
}

export default Hero;