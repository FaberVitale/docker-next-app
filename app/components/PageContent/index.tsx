import * as React from 'react';

interface PageContentProps {
  children?: React.ReactNode;
  className?: string;
}

const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
  ...otherProps
}) => (
  <>
    <div
      {...otherProps}
      className={className ? `page-content ${className}` : 'page-content '}
    >
      {children}
    </div>
    <style jsx>{`
      .page-content {
        display: block;
        /* Renders page content below the 'AppBar'. */
        margin: calc(var(--app-bar-height) + 0.5rem) auto 0;
        width: 100%;
        overflow: hidden;
        box-shadow: none;
      }

      @media all and (min-width: 768px) {
        .page-content {
          max-width: 100%;
        }
      }

      @media all and (min-width: 992px) {
        .page-content {
          max-width: 95%;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.12);
        }
      }

      @media all and (min-width: 1200px) {
        .page-content {
          max-width: 1200px;
        }
      }

      @media all and (min-width: 1400px) {
        .page-content {
          max-width: 1300px;
        }
      }
    `}</style>
  </>
);

export default PageContent;
