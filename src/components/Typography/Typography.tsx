import React from 'react';
import styles from './Typography.module.css';

type TypographyTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'label' | 'strong' | 'em' | 'small' | 'blockquote';
type TypographyVariant = 'title' | 'subtitle' | 'body' | 'caption';

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag>({ tag = 'div', variant, children }: TypographyProps<Tag>) => {
  const Component = tag ?? 'div';
  return <Component className={styles[variant]}>{children}</Component>;
};
