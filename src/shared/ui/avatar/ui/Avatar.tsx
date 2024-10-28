import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from 'shared/lib/cn';
import { type AvatarVariants, avatarVariants } from 'shared/ui/avatar';

type AvatarProps = {
  size?: AvatarVariants['size'];
  shape?: AvatarVariants['shape'];
};

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProps
>(({ className, size, shape, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, shape }), className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
