import type { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=women');
  return (
    <ShopLayout title='Category for Women' pageDescription='Find Products for women on TesloShop'>
      <Grid container spacing={3} display='flex' justifyContent='center' sx={{paddingY: 12}}>
        <Typography component='h1' variant='h1'>Women  | Todos los productos </Typography>
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

export default WomenPage;
