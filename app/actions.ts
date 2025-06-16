'use server';

import { prisma } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export async function handleCreatePostSubmit(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const imageUrl = formData.get('imageUrl') as string;

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl,
      authorImage: user?.picture ?? '',
      authorName: user?.given_name ?? '',
      authorId: user?.id ?? '',
    },
  });

  return redirect('/');
}
