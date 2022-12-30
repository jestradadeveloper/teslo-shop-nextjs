import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { ShopLayout } from "../../components/layouts"
import { ProductSlideShow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";
import { ICartProduct } from '../../interfaces/cart';
import { IValidSize } from '../../interfaces/products';

interface Props {
  product: IProduct
}

const ProductPage:NextPage<Props> = ({ product }) => {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  })
  const selectedSize = (size: IValidSize) => {
   setTempCartProduct( currentProduct => ({
    ...currentProduct,
    size
   }) )
  }
  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct( currentProduct => ({
     ...currentProduct,
     quantity
    }) )
   }
  const onAddProduct = () => {
    //console.log({tempCartProduct})
  }

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
                <ItemCounter
                  currentValue={tempCartProduct.quantity}
                  updatedQuantity={ onUpdateQuantity }
                  maxValue={ product.inStock > 5 ? 5 : product.inStock }
                />
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={tempCartProduct.size}
                  onSelectedSize={ (size)=> selectedSize(size) }
                />
              </Box>
               {/* Agregar al carrito */}
               {
                (product.inStock > 0)
                ? (
                  <Button
                    color='secondary'
                    className='circular-btn'
                    onClick={ onAddProduct }
                  >
                    {
                      tempCartProduct.size
                      ? 'Agregar al carrito'
                      : 'Seleccione una talla'
                    }
                  </Button>
                )
                : (
                  <Chip label='No hay disponibles' color='error' variant='outlined' />
                )
               }


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
