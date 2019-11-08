import * as React from 'react';
import RepoLink from './partials/RepoLink';

interface AppBarProps {
  children?: React.ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({ children }) => (
  <header>
    <h1>The Hurry assignment</h1>
    <nav>
      {children}
      <RepoLink />
    </nav>
    <style jsx>{`
      header {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        padding: 0 1rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: var(--app-bar-height);
        background: var(--primary-color);
        color: var(--primary-text-color);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
      }

      nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      nav > * {
        margin-left: 20px;
      }
    `}</style>
  </header>
);

export default AppBar;
