import * as React from 'react';

interface ExternalLinkProps {
  rel?: string;
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  rel,
  href,
  ...otherProps
}) => {
  const computedRel = rel
    ? `${rel} noopener noreferrer`
    : 'noopener noreferrer';

  /* eslint-disable jsx-a11y/anchor-has-content, react/jsx-no-target-blank */
  return <a target="_blank" rel={computedRel} href={href} {...otherProps} />;
  /* eslint-enable jsx-a11y/anchor-has-content, react/jsx-no-target-blank  */
};

export default ExternalLink;
