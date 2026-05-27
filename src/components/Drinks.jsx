import { FaGlassWhiskey, FaMugHot } from "react-icons/fa";

const drinks = [
  {
    name: "Classic Milk Tea",
    desc: "Smooth tea with rich creamy texture.",
    icon: <FaGlassWhiskey />,
  },
  {
    name: "Matcha Boba",
    desc: "Fresh creamy matcha with chewy pearls.",
    icon: <FaMugHot />,
  },
  {
    name: "Brown Sugar Blast",
    desc: "Sweet caramel notes with chilled milk.",
    icon: <FaMugHot />,
  },
];

const Drinks = () => {
  return (
    <section
      id="menu"
      className="py-24 px-6 bg-[#f8f4f6]"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-black text-center text-[#5c4b5f]">
          Signature Sips
        </h2>

        <p className="text-center text-xl text-[#7c6b7f] mt-4 mb-16">
          Crafted for comfort, cravings, and cozy conversations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {drinks.map((drink, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-10 border border-pink-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl text-pink-500 mb-6">
                {drink.icon}
              </div>

              <h3 className="text-3xl font-bold text-[#5c4b5f] mb-3">
                {drink.name}
              </h3>

              <p className="text-[#7c6b7f] text-lg leading-relaxed">
                {drink.desc}
              </p>

              <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition">
                Order Now
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Drinks;