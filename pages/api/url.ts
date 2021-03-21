import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Url } from '@prisma/client';

interface StatusResponse {
  status: 'Success' | 'Error';
}

const prisma = new PrismaClient();

const handlePost = async (req: NextApiRequest): Promise<any> => {
  const { original, shortened } = req.body;
  return prisma.url.create({
    data: {
      original,
      shortened,
    },
  });
};

interface GetResponse {
  code: number;
  response: {
    status: 'Success' | 'Error';
    message?: string;
    url?: Url;
  };
}

const handleGet = async (req: NextApiRequest): Promise<Url> => {
  const { original } = req.query;
  return prisma.url.findFirst({
    where: {
      original: original as string,
    },
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await handlePost(req);
  } else if (req.method === 'GET') {
    const url = await handleGet(req);
    return res.json(url);
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  res.status(200).json({ status: 'Success' });
}
