import React, { FC, HTMLAttributes } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';

export type NavProps = NextLinkProps & HTMLAttributes<HTMLAnchorElement>;

const NavLink: FC<NavProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...rest
}) => (
  <Link
    href={href}
    as={as}
    replace={replace}
    shallow={shallow}
    scroll={scroll}
    passHref={passHref}
    prefetch={prefetch}
  >
    {/* eslint-disable jsx-a11y/anchor-has-content */}
    <a {...rest} />
    {/* eslint-enable jsx-a11y/anchor-has-content */}
  </Link>
);

export default NavLink;
