import { Skeleton } from '@/components/ui/skeleton';
import BlogPostsSkeletons from '@/components/web/BlogPostsSkeletons';

const LoadingDashboard = () => {
  return (
    <div>
      <Skeleton className="w-36 rounded-xl h-6 bg-card mb-4" />
      <Skeleton className="w-24 rounded-xl h-10 bg-card mb-4" />

      <BlogPostsSkeletons />
    </div>
  );
};

export default LoadingDashboard;
