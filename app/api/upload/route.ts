import multer from 'multer';
import connectDB  from '@/lib/mongodb';
import { User } from '@/models/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const upload = multer({ storage: multer.memoryStorage() });
const apiRoute = nextConnect().use(upload.single('avatar'));


apiRoute.post(async (req: NextApiRequest & { file?: Express.Multer.File }, res: NextApiResponse) => {
  await connectDB();

  const buffer = req.file?.buffer;
  if (!buffer) return res.status(400).json({ error: 'No file uploaded' });

  const imageBase64 = buffer.toString('base64');
  const { email } = req.body;

  const updated = await User.findOneAndUpdate(
    { email },
    { image: `data:image/jpeg;base64,${imageBase64}` },
    { new: true }
  );

  res.status(200).json(updated);
});


export const config = {
  api: { bodyParser: false },
};

export default apiRoute;
