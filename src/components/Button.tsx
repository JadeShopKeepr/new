import React from 'react';

type ButtonVariant = 'contained' | 'outlined';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
