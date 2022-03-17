import React from 'react';
import { Link } from 'gatsby';

export default function NavBar() {
  return (
    <nav className="fixed bg-red-500 top-0 w-full z-[999]">
      <div className="container mx-auto flex flex-wrap items-center justify-between mt-0 py-4 px-4">
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="mt-4 lg:inline-lg:mt-0 text-white hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mt-4 lg:inline-lg:mt-0 text-white hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="mt-4 lg:inline-lg:mt-0 text-white hover:text-white mr-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// import React from 'react';
// import { BaseComponentProps } from '@/types';

// export default function Header(props: BaseComponentProps) {
//   const { children } = props;

//   return <header className="bg-red-900">{children}</header>;
// }
