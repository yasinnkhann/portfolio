import React, { ReactNode } from 'react';
import loadable from '@loadable/component';

const Header = loadable(() => import(`./Header`));

interface Props {
	children?: ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
