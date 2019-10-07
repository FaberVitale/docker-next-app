import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavLink from '..';

afterEach(cleanup);

describe('NavLink', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <NavLink
        href="/about.asp"
        onClick={() => {}}
        rel="noopener"
        title="about-title"
      >
        anchor-text
      </NavLink>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
