import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fffafc] py-32 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl md:text-6xl font-bold text-[#5f4b5b]">
          Visit Bobaholic
        </h2>

        <p className="mt-6 text-[#7b6a76] text-lg">
          Come for the drinks. Stay for the vibe.
        </p>

        {/* cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* instagram */}

          <a
            href="https://www.instagram.com/bobaholic_india/"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-3xl border border-[#f1e4eb] p-10 transition-all duration-300 hover:-translate-y-1"
          >

            <FaInstagram className="text-4xl text-[#ff4fa3] mx-auto mb-6" />

            <h3 className="text-2xl font-semibold text-[#5f4b5b]">
              Instagram
            </h3>

            <p className="mt-3 text-[#7b6a76]">
              @bobaholic_india
            </p>

          </a>

          {/* phone */}

          <div className="bg-white rounded-3xl border border-[#f1e4eb] p-10">

            <FaPhoneAlt className="text-4xl text-[#ff4fa3] mx-auto mb-6" />

            <h3 className="text-2xl font-semibold text-[#5f4b5b]">
              Call Us
            </h3>

            <p className="mt-3 text-[#7b6a76]">
              +91 98765 43210
            </p>

          </div>

          {/* maps */}

          <a
            href="https://maps.app.goo.gl/uz1pfUco3woLS2iD9"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-3xl border border-[#f1e4eb] p-10 transition-all duration-300 hover:-translate-y-1"
          >

            <FaMapMarkerAlt className="text-4xl text-[#ff4fa3] mx-auto mb-6" />

            <h3 className="text-2xl font-semibold text-[#5f4b5b]">
              Location
            </h3>

            <p className="mt-3 text-[#7b6a76]">
              Vijayawada, Andhra Pradesh
            </p>

          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;