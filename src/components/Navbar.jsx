const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">

      {/* logo */}

      <h1 className="text-3xl md:text-4xl font-bold text-pink-400 tracking-wide">
        BOBAHOLIC
      </h1>

      {/* nav links */}

      <ul className="hidden md:flex gap-10 text-white text-lg font-medium">

        <li>
          <a
            href="#home"
            className="hover:text-pink-300 transition-all duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#menu"
            className="hover:text-pink-300 transition-all duration-300"
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href="#gallery"
            className="hover:text-pink-300 transition-all duration-300"
          >
            Gallery
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-pink-300 transition-all duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;