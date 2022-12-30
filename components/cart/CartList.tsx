import { Box, CardActionArea, CardMedia, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FC, useContext } from 'react';
import { CartContext } from '../../context/cart/CartContext';
import { ICartProduct } from '../../interfaces';

interface Props{
  editable?: boolean;
}

export const CartList:FC<Props> = ({editable = false}) => {


  const { cart:cartProducts, updateCartQuantity  } = useContext(CartContext);

  const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue
    updateCartQuantity(product)
  }

  return (
    <>
      {
        cartProducts.map( product => (
          <Grid key={product.slug + product.size } container spacing={2} sx={{ mb:1 }}>
            <Grid item xs={3}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                        image={`/products/${product.image}`}
                        component='img'
                        sx={{ borderRadius: '5px' }}
                      />
                  </CardActionArea>
                </Link>
              </NextLink>

            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Talla: <strong>{product.size}</strong> </Typography>
                {
                  editable
                  ? (
                    <ItemCounter
                        currentValue={product.quantity}
                        updatedQuantity={ (newValue)=>{ onNewCartQuantityValue(product, newValue) } }
                        maxValue={ 10 }
                    />
                  )
                  : <Typography variant='h5'>{product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}</Typography>
                }

              </Box>
            </Grid>
            <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
              {
                editable && (
                  <IconButton color="error" aria-label="upload picture" component="span">
                    <CloseOutlinedIcon />
                  </IconButton>
                )
              }

            </Grid>
            <Divider  sx={{
                  width: '80%',
                  bgcolor: 'background.paper',
                  margin: '10px auto',
                  px:2
                }}/>
          </Grid>
        ) )
      }
    </>
  )
}
