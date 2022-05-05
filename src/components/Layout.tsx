import React from 'react';
import loadable from '@loadable/component';

const Header = loadable(() => import(`./Header`));

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
