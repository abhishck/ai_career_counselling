import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="text-xl font-bold text-blue-600">
            AI Career
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#objective" className="hover:text-blue-600">Objective</a>
            <a href="#reviews" className="hover:text-blue-600">Reviews</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </div>

          {/* LOGIN BUTTON */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={26}/> : <Menu size={26}/>}
            </button>
          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md">

          <a
            href="#home"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Home
          </a>

          <a
            href="#objective"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Objective
          </a>

          <a
            href="#reviews"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Reviews
          </a>

          <a
            href="about"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            AboutUs
          </a>

          <div className="p-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Login
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;