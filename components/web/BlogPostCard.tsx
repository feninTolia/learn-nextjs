/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

const BlogPostCard = ({ data }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border-1 shadow-md transition-all bg-card hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden ">
          <img
            src={data.imageUrl}
            alt="Cover"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold ">{data.title}</h3>

          <p className="mb-4 text-sm line-clamp-2 text-muted-foreground">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 rounded-full overflow-hidden">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {data.authorName}
              </p>
            </div>

            <time className="text-xs text-muted-foreground">
              {new Intl.DateTimeFormat('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
