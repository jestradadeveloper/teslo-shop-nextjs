import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"

const AddressPage = () => {
  return (
    <ShopLayout title="Direccion" pageDescription="Confirmar direccion de destino">
      <Box sx={{mt:15}} display='flex' justifyContent='center'>
        <Typography variant='h1' component='h1' >
          Dirección
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{mt:3}}>
        <Grid item xs={12} sm={6}>
          <TextField label='Nombre' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellido' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección 2' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Código Postal' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select
              variant='filled'
              label="País"
              value={1}
            >
              <MenuItem value={1}>EUA</MenuItem>
              <MenuItem value={2}>Colombia</MenuItem>
              <MenuItem value={3}>México</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Teléfono' variant="filled" fullWidth/>
        </Grid>
      </Grid>
      <Box sx={{mt:5}} display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn' size='large'>
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage
