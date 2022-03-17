import React from 'react';
import { Link } from 'gatsby';

export default function NavBar() {
  return (
    <nav className="fixed bg-red-500 top-0 w-full z-[9999]">
      <div className="ml-9 py-5 px-5">
        <div className="w-full">
          <div className="text-sm">
            <Link to="/" className="mt-4 text-white mr-8">
              Home
            </Link>
            <Link to="/about" className="mt-4 text-white mr-8">
              About
            </Link>
            <Link to="/projects" className="mt-4 text-white mr-8">
              Projects
            </Link>
            <Link to="/contact" className="mt-4 text-white mr-8">
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
