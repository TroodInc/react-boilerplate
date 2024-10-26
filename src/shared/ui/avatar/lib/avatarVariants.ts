import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-muted-background font-normal text-primary-foreground',
  {
    variants: {
      size: {
        xs: 'size-5 text-sm',
        sm: 'size-6 text-sm',
        default: 'size-7 text-sm',
        lg: 'size-8 text-base',
        xl: 'size-9 text-base',
        '2xl': 'size-10 text-lg',
        '3xl': 'size-11 text-lg',
        '4xl': 'size-12 text-xl',
        '5xl': 'size-13 text-xl'
      },
      shape: {
        default: 'rounded-full',
        circle: 'rounded-full',
        square: 'rounded-radius'
      }
    },
    defaultVariants: {
      shape: 'default',
      size: 'default'
    }
  }
);
