import type { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

const KidPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=kid');
  return (
  <ShopLayout title='Category for Kids' pageDescription='Products for kid on TesloShop'>
    <Grid container spacing={3} display='flex' justifyContent='center' sx={{paddingY: 12}}>
      <Typography component='h1' variant='h1'>Kid  | Todos los productos</Typography>
    </Grid>
    {
       isLoading
       ?
       <FullScreenLoading />
       :
       <ProductList products={ products } />
     }
  </ShopLayout>
  )
}

export default KidPage
