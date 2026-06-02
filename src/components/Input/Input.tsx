import React from 'react';

import clsx from 'clsx';
import styles from './Input.module.css';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  component?: React.ElementType;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, component, className, ...props }, ref) => {
  const id = React.useId();
  const Component = component || 'input';
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className='label'>
          {label}
        </label>
      )}
      <Component className={clsx(styles.input, 'subtitle', className)} {...props} id={id} ref={ref} />
    </div>
  );
});
