import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  // eslint-disable-next-line consistent-return
  const renderNavBar = () => {
    if (typeof window !== `undefined`) {
      const endpoint = window.location.pathname;
      return (
        <nav className="w-full">
          <ul className="text-base flex justify-around 2xl:text-2xl">
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
                  endpoint.includes(`projects`)
                    ? `text-yellow-300`
                    : `text-white`
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
                  endpoint.includes(`/skills`)
                    ? `text-yellow-300`
                    : `text-white`
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
                  endpoint.includes(`contact`)
                    ? `text-yellow-300`
                    : `text-white`
                } cursor-pointer`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  };

  return (
    <header className="fixed bg-black w-full top-0 h-[var(--header-height-mobile)] z-[999] flex items-center font-[Manrope] shadow-[1px_1px_1px_3px] 2xl:h-[var(--header-height-2xl)]">
      {renderNavBar()}
    </header>
  );
}
