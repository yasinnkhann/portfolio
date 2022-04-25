import React, { useEffect } from 'react';
import { Link } from 'gatsby';
// import { navigate } from 'gatsby';

export default function Header() {
  const endpoint = window.location.pathname;

  // useEffect(() => {
  //   if (endpoint.includes(`about`)) {
  //     document.body.style.backgroundColor = `cornsilk`;
  //   } else if (endpoint.includes(`contact`)) {
  //     document.body.style.backgroundColor = `ivory`;
  //   } else {
  //     document.body.style.backgroundColor = ``;
  //   }
  // }, [document.body.style.backgroundColor]);

  return (
    <header className="fixed bg-red-500 w-full top-0 h-12 z-[999] flex items-center font-[Manrope]">
      <nav className="w-full">
        <ul className="text-base flex justify-around">
          <li>
            {/* eslint-disable-next-line */}
            {/*  @ts-ignore */}
            <Link
              to="/"
              className={`${
                endpoint === `/` ? `text-yellow-300` : `text-white`
              } cursor-pointer`}
            >
              Home
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            {/*  @ts-ignore */}
            <Link
              to="/about"
              className={`${
                endpoint.includes(`about`) ? `text-yellow-300` : `text-white`
              } cursor-pointer`}
            >
              About
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            {/*  @ts-ignore */}
            <Link
              to="/projects"
              className={`${
                endpoint.includes(`projects`) ? `text-yellow-300` : `text-white`
              } cursor-pointer`}
            >
              Projects
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            {/*  @ts-ignore */}
            <Link
              to="/skills"
              className={`${
                endpoint.includes(`/skills`) ? `text-yellow-300` : `text-white`
              } cursor-pointer`}
            >
              Skills
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            {/*  @ts-ignore */}
            <Link
              to="/contact"
              className={`${
                endpoint.includes(`contact`) ? `text-yellow-300` : `text-white`
              } cursor-pointer`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
