import { prisma } from '@/lib/db';

async function getPosts() {
  return await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8 ">Latest posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <p key={post.title}>{post.title}</p>
        ))}
      </div>
    </div>
  );
}
