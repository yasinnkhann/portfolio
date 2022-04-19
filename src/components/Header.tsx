import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="fixed bg-red-500 w-full top-0 h-10 z-[999] flex items-center">
      <nav className="w-full">
        <ul className="text-base flex justify-around">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
