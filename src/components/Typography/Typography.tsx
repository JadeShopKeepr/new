import React from 'react';
import clsx from 'clsx';

type TypographyTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'label' | 'strong' | 'em' | 'small' | 'blockquote';
type TypographyVariant = 'title' | 'subtitle' | 'body' | 'input';

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag>({ tag = 'div', variant, children, className, ...props }: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};
