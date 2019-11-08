import * as React from 'react';
import Link from 'next/link';

interface AppBarButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
}

const AppBarButton: React.FC<AppBarButtonProps> = ({
  children,
  href,
  onClick,
  ...otherProps
}) => (
  <>
    {href ? (
      <Link href={href}>
        <a {...otherProps} onClick={onClick} className="app-button">
          {children}
        </a>
      </Link>
    ) : (
      <button
        type="button"
        onClick={onClick}
        {...otherProps}
        className="app-button"
      >
        {children}
      </button>
    )}
    <style jsx>
      {`
        .app-button {
          display: inline-block;
          padding: 0.5rem;
          line-height: 1.2;
          font-size: 1.4rem;
          background: transparent;
          text-transform: uppercase;
          font-weight: bold;
          text-decoration: none;
          border: none;
          color: var(--primary-text-color);
        }
      `}
    </style>
  </>
);

export default AppBarButton;
