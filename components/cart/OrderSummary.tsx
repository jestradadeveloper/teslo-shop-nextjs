import { Divider, Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
   <Grid container>
     <Grid item xs={6}>
       <Typography>No. Productos:</Typography>
     </Grid>
     <Grid item xs={6} display='flex' justifyContent='end'>
       <Typography>3 items</Typography>
     </Grid>
     <Grid item xs={6}>
       <Typography>Subtotal:</Typography>
     </Grid>
     <Grid item xs={6} display='flex' justifyContent='end'>
       <Typography>{`$${155.36}`}</Typography>
     </Grid>
     <Grid item xs={6}>
       <Typography>Impuestos (15%):</Typography>
     </Grid>
     <Grid item xs={6} display='flex' justifyContent='end'>
       <Typography>{`$${35.34}`}</Typography>
     </Grid>
     <Divider  sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                  mt:2
                }}/>
     <Grid item xs={6} sx={{mt:2}}>
       <Typography variant='subtitle1' >Total a pagar:</Typography>
     </Grid>
     <Grid item xs={6} display='flex' justifyContent='end'>
       <Typography variant='subtitle1' >{`$${185.34}`}</Typography>
     </Grid>
   </Grid>
  )
}
