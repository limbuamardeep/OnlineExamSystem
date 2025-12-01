export const DesktopNavbar = () => {
  return (
    <nav className="hidden md:flex w-full bg-white shadow-md px-6 md:px-5 py-4 justify-around items-center">
      <div className="flex flex-row gap-2 justify-center items-center">
        <div >
          <img src="Group 5 Copy.png" className="w"/>
        </div>
        <div className="font-roboto text-[#4A3AFF] text-2xl font-bold text-">Online Exam</div>
      </div>

      <ul className="flex space-x-8 text-base justify-center font-sans items-center">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-blue-600">
            Resources
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
        <li>
          <button className="border border-gray-300 px-6 py-2 rounded-md flex justify-center">
            Login
          </button>
        </li>
        <li>
          <button className="bg-[#4A3AFF] rounded-lg text-white px-6 py-2">
            Signup
          </button>
        </li>
      </ul>
    </nav>
  );
};
