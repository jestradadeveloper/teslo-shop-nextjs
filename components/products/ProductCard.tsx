import { Chip, Box, Card, CardActionArea, CardMedia, Grid, Typography, Link } from '@mui/material'
import NextLink from 'next/link'
import { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces'

interface Props{
  product: IProduct;
}
export const ProductCard:FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const productImage = useMemo(()=>{
    return isHovered 
    ? `/products/${product.images[1]}`
    : `/products/${product.images[0]}`
  }, [isHovered, product.images])
  return (
    <Grid 
      item 
      xs={6} sm={4} 
      onMouseEnter={()=> setIsHovered(true) }
      onMouseLeave={()=> setIsHovered(false) }
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref>
          <Link>
            <CardActionArea>
              {
                (product.inStock === 0) && (
                  <Chip 
                    color="primary"
                    label="No hay en stock"
                    sx= {{ position: 'absolute', zIndex: 99, top: '10px', left: '10px'}}
                  />
                )
              }
              
              <CardMedia 
                component='img'
                className='fadeIn'
                image={ productImage }
                alt={ product.title }
                onLoad={ ()=> setIsImageLoaded(true) }
              />
            </CardActionArea>
          </Link>
        </NextLink>
        
      </Card>
      <Box sx={{mt:1,  display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
        <Typography fontWeight={800}>{ product.title }</Typography>
        <Typography fontWeight={600}>{ `$${product.price}` }</Typography>
        <Typography fontWeight={600}>Gender: { product.gender }</Typography>
      </Box>
  </Grid>
  )
}
