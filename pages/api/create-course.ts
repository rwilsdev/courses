import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.course.create({
    data: {
      title: 'Learning to code!',
      lessons: {
        create: { title: 'Learn the terminal' },
      },
    },
  });

  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  });
  res.send(courses);
}
