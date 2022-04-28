import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { IProduct } from '../../../interfaces'
import { Product } from '../../../models'
type Data = 
  | { message: string }
  | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProduct(req,res)
    default:
      return res.status(400).json({
        message: 'Bad Request'
      })
      break;
  }
}

const getProduct = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { slug } = req.query;
  const productFinded = await Product.findOne({slug})
                                     .lean();
  if (!productFinded){
    return res.status(404).json({message: 'producto no encontrado'})
  }
  await db.disconnect();
  return res.json(productFinded);
}
