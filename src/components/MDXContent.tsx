import React, { ReactNode } from 'react';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { MDXComponents, MergeComponents } from '@mdx-js/react/lib';

interface Props {
	components?: Readonly<MDXComponents> | MergeComponents;
	children?: ReactNode;
}

export default function MDXContent({ children, components = {} }: Props) {
	return (
		<MDXProvider components={useMDXComponents(components)}>
			{children}
		</MDXProvider>
	);
}
