import * as React from 'react';

export interface ErrorLabelProps {
  children?: React.ReactNode;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({
  children = 'An error has occurred',
  ...otherProps
}) => <span {...otherProps}>{children}</span>;

export default ErrorLabel;
