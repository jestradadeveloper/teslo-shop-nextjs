import { Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

const KidCategoryPage = () => {
  const { products, isLoading } = useProducts('/products?gender=kid');
  return (
  <ShopLayout title='Category for Kid' pageDescription='Products for kid on TesloShop'>
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

export default KidCategoryPage
