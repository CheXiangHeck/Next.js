import React from "react";

const Navbar = () => {
  return (
    <nav className="scrolled-header sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm md:flex md:items-center md:justify-between text-xl z-10 mx-auto"
    style={{background:'url(/projects/NavHover.gif)', backgroundSize:'cover' }}>
      <div className="px-12 h-24 flex justify-between items-center text-white relative">
        <a href="#" className="md:inline hidden font-bold">#LearnEXP</a>
        <a href="#" className="md:hidden font-bold">#Learn</a>
      </div>
      <div className="md:flex md:bg-purple bg-none">
          <a href="#aboutMe" className="mx-4">About</a>
          <a href="#project" className="mx-4">Projects</a>
          <a href="#contact" className="mx-4">Contact</a>
        </div>
    </nav>
  );
};

export default Navbar;