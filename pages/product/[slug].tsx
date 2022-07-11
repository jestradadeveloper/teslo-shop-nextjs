import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ShopLayout } from "../../components/layouts"
import { ProductSlideShow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct
}

const ProductPage:NextPage<Props> = ({ product }) => {

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow  images={product.images}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
              {/* Titulos */}
              <Typography variant='h1' component='h1'>{product.title}</Typography>
              <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
              {/* Cantidad */}
              <Box sx={{ my:2 }}>
                <Typography variant='subtitle2'>Cantidad</Typography>
                <ItemCounter/>
                <SizeSelector  sizes={product.sizes} />
              </Box>
               {/* Agregar al carrito */}
               <Button color='secondary' className='circular-btn'>
                 Agregar al carrito
               </Button>
               <Chip label='No hay disponibles' color='error' variant='outlined' />
               <Box sx={{ mt:3 }}>
                  <Typography variant='subtitle2'>Descripcion:</Typography>
                  <Typography variant='body2'>{product.description}</Typography>
               </Box>
               <Box sx={{ mt:3 }}>
                  <Typography variant='subtitle2'>Gender:</Typography>
                  <Typography variant='body2'>{product.description}</Typography>
               </Box>
          </Box>

        </Grid>
      </Grid>
    </ShopLayout>
  )
}

//Get Static Paths
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await dbProducts.getAllProductSlugs();

  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

//Get Server Side Props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductsBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}


export default ProductPage
