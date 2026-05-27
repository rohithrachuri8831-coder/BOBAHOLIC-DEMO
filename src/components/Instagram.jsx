import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  return (
    <section className="bg-[#fffafc] py-32 px-6">

      <div className="max-w-4xl mx-auto text-center bg-white border border-[#f1e4eb] rounded-3xl p-16">

        <FaInstagram className="text-5xl text-[#ff4fa3] mx-auto" />

        <h2 className="mt-8 text-5xl md:text-6xl font-bold text-[#5f4b5b]">
          Follow Bobaholic
        </h2>

        <p className="mt-6 text-lg text-[#7b6a76] leading-relaxed">
          Cozy corners, creamy drinks, and late-night bubble tea moments.
        </p>

        <a
          href="https://www.instagram.com/bobaholic_india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="inline-block mt-10 bg-[#ff4fa3] hover:bg-pink-400 text-white px-8 py-4 rounded-full transition-all duration-300"
        >

          Visit Instagram

        </a>

      </div>

    </section>
  );
};

export default Instagram;