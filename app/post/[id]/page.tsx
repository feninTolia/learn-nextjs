/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from '@/components/ui/button';
import { prisma } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

async function getPostById(id: string) {
  const data = await prisma.blogPost.findUnique({ where: { id } });

  if (!data) {
    return notFound();
  }

  return data;
}

const PostPage = async ({ params }: Props) => {
  const { id } = await params;
  const data = await getPostById(id);
  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <Link href="/" className={buttonVariants({ variant: 'outline' })}>
        Back to posts
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src={data.authorImage}
            width={40}
            height={40}
            alt={data.authorName}
            className="size-10 rounded-full object-cover"
          />
          <span>{data.authorName}</span>
          <span className="text-muted-foreground">
            {new Intl.DateTimeFormat('en-us', {
              month: 'short',
              year: 'numeric',
              day: 'numeric',
            }).format(data.createdAt)}
          </span>
        </div>

        <img
          src={data.imageUrl}
          alt=""
          className="w-full h-[400px] object-cover rounded-md"
          fetchPriority="high"
        />

        <p className="mt-8 text-balance">{data.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
