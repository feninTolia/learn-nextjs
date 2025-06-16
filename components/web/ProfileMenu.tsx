'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PersonStandingIcon } from 'lucide-react';
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const ProfileMenu = () => {
  const { user } = useKindeBrowserClient();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <PersonStandingIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user ? (
          <>
            <span className="p-2">{user.given_name}</span>
            <DropdownMenuItem>
              <LogoutLink>Log out</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <LoginLink className={buttonVariants()}>Login</LoginLink>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <RegisterLink
                className={buttonVariants({ variant: 'secondary' })}
              >
                Sign Up
              </RegisterLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
