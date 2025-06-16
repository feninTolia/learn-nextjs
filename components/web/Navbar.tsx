import 'server-only';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/theme-toggle';
import ProfileMenu from '@/components/web/ProfileMenu';

const Navbar = async () => {
  return (
    <nav className="py-5 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold ">
            Blog<span className="text-blue-500">Tolik</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href={'/'}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href={'/dashboard'}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ProfileMenu />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
