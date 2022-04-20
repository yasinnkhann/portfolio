import React from 'react';
import { Link } from 'gatsby';
// import { navigate } from 'gatsby';

export default function Header() {
  return (
    <header className="fixed bg-red-500 w-full top-0 h-12 z-[999] flex items-center">
      <nav className="w-full">
        <ul className="text-base flex justify-around">
          <li>
            <Link to="/" className="text-white cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" text-white cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
