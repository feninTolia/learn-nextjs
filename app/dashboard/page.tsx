import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Dashboard = async () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
      </div>

      <Link href={'/dashboard/create'} className={buttonVariants()}>
        Create Post
      </Link>
    </div>
  );
};

export default Dashboard;
