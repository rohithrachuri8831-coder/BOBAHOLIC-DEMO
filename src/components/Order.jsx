import {
  SiSwiggy,
  SiZomato,
} from "react-icons/si";

const Order = () => {
  return (
    <section className="bg-white py-32 px-6">

      {/* heading */}

      <div className="text-center mb-20">

        <h2 className="text-5xl md:text-6xl font-bold text-[#5f4b5b]">
          Order Online
        </h2>

        <p className="mt-5 text-lg text-[#7b6a76]">
          Enjoy your favorite drinks from anywhere.
        </p>

      </div>

      {/* cards */}

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">

        {/* swiggy */}

        <a
          href="https://www.swiggy.com"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#fffafc] border border-[#f1e4eb] rounded-3xl p-12 transition-all duration-300 hover:-translate-y-1"
        >

          <SiSwiggy className="text-6xl text-[#fc8019]" />

          <h2 className="mt-8 text-4xl font-bold text-[#5f4b5b]">
            Swiggy
          </h2>

          <p className="mt-5 text-[#7b6a76] text-lg leading-relaxed">
            Quick delivery for your bubble tea cravings.
          </p>

          <button className="mt-10 bg-[#fc8019] hover:opacity-90 text-white px-7 py-3 rounded-full transition-all duration-300">

            Order on Swiggy

          </button>

        </a>

        {/* zomato */}

        <a
          href="https://www.zomato.com"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#fffafc] border border-[#f1e4eb] rounded-3xl p-12 transition-all duration-300 hover:-translate-y-1"
        >

          <SiZomato className="text-6xl text-[#e23744]" />

          <h2 className="mt-8 text-4xl font-bold text-[#5f4b5b]">
            Zomato
          </h2>

          <p className="mt-5 text-[#7b6a76] text-lg leading-relaxed">
            Fresh drinks delivered right to your doorstep.
          </p>

          <button className="mt-10 bg-[#e23744] hover:opacity-90 text-white px-7 py-3 rounded-full transition-all duration-300">

            Order on Zomato

          </button>

        </a>

      </div>

    </section>
  );
};

export default Order;