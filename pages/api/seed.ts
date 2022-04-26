import type { NextApiRequest, NextApiResponse } from 'next';

import { db, seedData } from '../../database';
import { Product } from '../../models';


interface Data{
  message: string
}
export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>){
  if(process.env.NODE_ENV === 'production'){
    return res.status(401).json({
      message: 'You are unauthorized for this service'
    })
  }
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedData.initialData.products);
  await db.disconnect();
  res.status(200).json({
    message: 'Successfull Process complete'
  })

}
