import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
	const endpoint =
		typeof window !== 'undefined' ? window.location.pathname : '';

	return (
		<header className='fixed bg-black w-full top-0 h-[var(--header-height-mobile)] 2xl:h-[var(--header-height-2xl)] z-[999] flex items-center font-[Manrope] shadow-[1px_1px_1px_3px]'>
			<nav className='w-full'>
				<ul className='text-base flex justify-around 2xl:text-2xl'>
					<li>
						<Link
							to='/'
							className={`${
								endpoint === `/` ? `text-yellow-300` : `text-white`
							} cursor-pointer`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about/'
							className={`${
								endpoint === `/about/` ? `text-yellow-300` : `text-white`
							} cursor-pointer`}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to='/projects/'
							className={`${
								endpoint.includes(`/projects/`)
									? `text-yellow-300`
									: `text-white`
							} cursor-pointer`}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to='/skills/'
							className={`${
								endpoint === `/skills/` ? `text-yellow-300` : `text-white`
							} cursor-pointer`}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							to='/contact/'
							className={`${
								endpoint === `/contact/` ? `text-yellow-300` : `text-white`
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
