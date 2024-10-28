import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react';

import { cn } from 'shared/lib/cn';

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square size-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { AvatarImage };
