import * as React from 'react';

const CssBaseline = React.memo(() => (
  <style global jsx>{`
    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    strong,
    b {
      font-weight: bolder;
    }

    body {
      width: 100%;
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      background-color: #fff;
    }
    @media print {
      body {
        background-color: #fff;
      }
    }

    body::backdrop {
      background-color: #fff;
    }

    :root {
      font-size: 10px;
      --app-bar-height: 5.2rem;
      --primary-color: #710b41;
      --secondary-color: #82335a;
      --primary-text-color: #e7eced;
      --secondary-text-color: #e7eced;
      --breakpoint-xs: 0;
      --breakpoint-sm: 576px;
      --breakpoint-md: 768px;
      --breakpoint-lg: 992px;
      --breakpoint-xl: 1200px;
      --breakpoint-xxl: 1400px;
    }

    *:focus {
      outline: 2px solid var(--secondary-color);
      outline-offset: 3px;
    }

    ::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    p {
      margin-bottom: 1rem;
    }

    /* Typograhic scale. */
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.9rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.6rem;
    }

    a {
      font-size: 1.6rem;
    }

    span {
      font-size: 1.6rem;
    }

    /* Custom styles */
    .with-p {
      padding: 1.2rem;
    }

    p {
      margin-bottom: 1rem;
    }

    a {
      font-weight: 500;
      color: var(--primary-color);
      text-decoration: underline;
    }

    a:visited {
      color: var(secondary-color);
    }
  `}</style>
));

export default CssBaseline;
