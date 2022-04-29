import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';

import useSWR from 'swr';
const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())
const HomePage: NextPage = () => {
  const { data, error } = useSWR('/api/products', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
   <ShopLayout title={'Tesla Shop - Home'} pageDescription={'Find best Tesla products'}>
     <Typography variant='h1' component='h1'>Tienda</Typography>
     <Typography variant='h2'  sx={{ mb: 1 }}>Todos los productos</Typography>
     <ProductList products={ data } />
   </ShopLayout>
  )
}

export default HomePage
