import { Box, Typography } from '@mui/material';
import type { NextPage, GetServerSideProps } from 'next';
import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';

import { dbProducts} from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
   <ShopLayout title={'Buscar producto'} pageDescription={'Find best Tesla products'}>
     <Typography variant='h1' component='h1'>Buscar producto</Typography>
     {
       foundProducts 
       ? <Typography variant='h2'  sx={{ mb: 1 }} textTransform='capitalize'> Search Term: { query }</Typography>
       : (
         <Box display='flex'>
           <Typography variant='h2'  sx={{ mb: 1 }}>We could'nt find a product with search term</Typography>
           <Typography variant='h2'  sx={{ ml: 1 }} color='secondary'>{query}</Typography>
         </Box>
       )

     }
     <ProductList products={ products } />
    
   </ShopLayout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { query = ''} = params as {query: string};
  if(query.length === 0){
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }
  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;
  if (!foundProducts){
    products = await dbProducts.getAllProducts();
  }
  //TODO returnar otros productos
  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default SearchPage
