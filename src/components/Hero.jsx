import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";

const images = [store1, store2, store3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">

        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.45 },
              scale: {
                duration: 4.5,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#fff7fb] to-transparent"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30 px-8 py-6 flex items-center justify-between">

        <h1 className="text-5xl font-extrabold text-pink-500 tracking-tight">
          BOBAHOLIC
        </h1>

        <div className="flex gap-10 text-white text-xl font-medium">
          <a
            href="#home"
            className="hover:text-pink-400 transition"
          >
            Home
          </a>

          <a
            href="#menu"
            className="hover:text-pink-400 transition"
          >
            Menu
          </a>

          <a
            href="#gallery"
            className="hover:text-pink-400 transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-pink-400 transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Logo */}
        <motion.img
          src={logo}
          alt="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-60 md:w-72 mb-8 drop-shadow-2xl"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-black leading-none tracking-tight text-7xl md:text-[120px]"
        >
          Sip. Smile.
          <br />
          Repeat.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-white/90 text-2xl max-w-3xl leading-relaxed"
        >
          Cozy bubble tea moments, dreamy interiors, and happiness in every sip ✨
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-6 mt-12 flex-wrap justify-center"
        >
          <button className="bg-pink-500 hover:bg-pink-600 transition px-10 py-4 rounded-full text-white text-xl font-semibold shadow-xl">
            Explore Menu
          </button>

          <button className="bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition px-10 py-4 rounded-full text-white text-xl font-semibold">
            Visit Store
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;