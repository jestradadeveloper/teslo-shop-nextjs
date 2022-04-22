import { Box, CardActionArea, CardMedia, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FC } from 'react';
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]
interface Props{
  editable?: boolean;
}

export const CartList:FC<Props> = ({editable = false}) => {
  return (
    <>
      {
        productsInCart.map( product => (
          <Grid key={product.slug} container spacing={2} sx={{ mb:1 }}>
            <Grid item xs={3}>
              <NextLink href={`/product/slug`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images[0]}`}
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
                <Typography variant='body1'>Talla: <strong>M</strong> </Typography>
                { 
                  editable 
                  ? <ItemCounter />
                  : <Typography variant='h5'>3 items</Typography>
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
