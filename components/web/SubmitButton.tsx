'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitButton = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const SubmitButton = ({ children, ...props }: SubmitButton) => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-fit" type="submit" disabled={pending} {...props}>
      {pending ? 'Loading...' : children}
    </Button>
  );
};

export default SubmitButton;
