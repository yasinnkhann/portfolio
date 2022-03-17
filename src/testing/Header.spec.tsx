import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from '../components/NavBar';

describe(`Header`, () => {
  it(`renders a Header component`, () => {
    render(<Header>Test Header</Header>);

    expect(screen.getByText(`Test Header`)).toBeInTheDocument();
  });
});
