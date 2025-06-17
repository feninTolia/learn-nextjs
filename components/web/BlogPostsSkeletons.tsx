import { Skeleton } from '@/components/ui/skeleton';

const BlogPostsSkeletons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <Skeleton className="h-72 w-full bg-card rounded-lg" />
      <Skeleton className="h-72 w-full bg-card" />
      <Skeleton className="h-72 w-full bg-card" />
    </div>
  );
};

export default BlogPostsSkeletons;
