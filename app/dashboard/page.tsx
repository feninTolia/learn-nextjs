import { buttonVariants } from '@/components/ui/button';
import BlogPostCard from '@/components/web/BlogPostCard';
import { prisma } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const getPostsByUserId = async (userId: string) => {
  return await prisma.blogPost.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: 'desc' },
  });
};

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getPostsByUserId(user?.id ?? '');

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
      </div>

      <Link href={'/dashboard/create'} className={buttonVariants()}>
        Create Post
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {data.map((post) => (
          <BlogPostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
