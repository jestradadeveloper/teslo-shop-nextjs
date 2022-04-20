import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';


const Home: NextPage = () => {
  return (
   <ShopLayout title={'Tesla Shop - Home'} pageDescription={'Find best Tesla products'}>
     <Typography variant='h1' component='h1'>Tienda</Typography>
     <Typography variant='h2'  sx={{ mb: 1 }}>Todos los productos</Typography>
     <ProductList products={ initialData.products as any} />
   </ShopLayout>
  )
}

export default Home
