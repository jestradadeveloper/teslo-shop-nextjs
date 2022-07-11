import { Typography } from '@mui/material';
import type { NextPage, GetServerSideProps } from 'next';
import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';

import { dbProducts} from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
  products: IProduct[];
}

const SearchPage: NextPage<Props> = ({ products }) => {
  return (
   <ShopLayout title={'Buscar producto'} pageDescription={'Find best Tesla products'}>
     <Typography variant='h1' component='h1'>Buscar producto</Typography>
     <Typography variant='h2'  sx={{ mb: 1 }}>ABC --- abc</Typography>
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
  let products = await dbProducts.getProductsByTerm(query)
  //TODO returnar otros productos
  return {
    props: {
      products
    }
  }
}

export default SearchPage
