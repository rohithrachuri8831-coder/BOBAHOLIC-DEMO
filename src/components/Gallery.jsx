import { motion } from "framer-motion";

import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";
import drink1 from "../assets/drink1.webp";
import { FaCircle } from "react-icons/fa";
const images = [store1, store2, store3, drink1];

const Gallery = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden" id="gallery">

      <div className="flex items-center justify-center gap-4">

  <h2 className="text-5xl md:text-6xl font-bold text-[#5f4b5b]">
    Cozy Corners
  </h2>

  <FaCircle className="text-[10px] text-pink-400 opacity-60 mt-2" />

</div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-[40px] shadow-2xl"
          >

            <img
              src={img}
              alt="gallery"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
            />

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;