import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
import { CreditCardOffRounded, CreditScoreRounded } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden XXXXXXX' pageDescription='Resumen de la compra'>
      <Box display='flex' justifyContent='center' sx={{ mt: 15 }}>
        <Typography variant='h1' component='h1'>Orden: ABC123 </Typography>
      </Box>
      <Chip 
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={ <CreditCardOffRounded />}
      />
      
      <Grid container sx={{ mt:5 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
                <Typography variant='h2'>
                  Resumen ( 3 productos )
                </Typography>
                <Divider sx={{ my: 1}}/>
                <Box display='flex' justifyContent='end'>
                  <NextLink href='/checkout/address' passHref>
                    <Link underline='always'>
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <Typography variant='subtitle1'> Direccion de entrega</Typography>
                <Typography> Avenida Plaza Sezame</Typography>
                <Typography> 322 Golden Valley</Typography>
                <Typography> Bahia de Banderas, Nay</Typography>
                <Typography> Mexico</Typography>
                <Typography> 3223094030 </Typography>
                <Divider sx={{ my:1 }}/>
                <Box display='flex' justifyContent='end'>
                  <NextLink href='/cart' passHref>
                    <Link underline='always'>
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <OrderSummary />
                <Box sx={{ my:1 }}>
                  {/** TODO */}
                  <h1>Pagar</h1>
                  <Chip 
                    label="Orden ya pagada"
                    variant="outlined"
                    color="primary"
                    icon={ <CreditScoreRounded />}
                    />
                </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage
