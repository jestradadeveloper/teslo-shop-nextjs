import { Button, Chip, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName:'Pagada',
    description:'Muestra la informacion sobre si la orden esta pagada',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        params.row.paid
        ? <Chip color='success' label='Pagada' variant='outlined'/>
        : <Chip color='error' label='No Pagada' variant='outlined'/>
      )
    }

  },
  {
    field: 'orderdetail',
    headerName:'Detalle de la orden',
    width: 200,
    editable: false,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return(
        <NextLink href={`/orders/${params.row.orderdetail}`} passHref>
          <Link component="button">
            <Button color='secondary' variant="contained" component="span">
              {params.row.orderdetail}
            </Button>
          </Link>
        </NextLink>
      )
    }
  }
];
const rows = [
  { id: 1, paid: false, fullname: 'Jose Estrada', orderdetail: '1212121'},
  { id: 2, paid: true, fullname: 'Jose Manuel', orderdetail: '12ab121'},
  { id: 3, paid: false, fullname: 'Jose Evaristo', orderdetail: '121qwa121'},
  { id: 4, paid: true, fullname: 'Jose Lazcano', orderdetail: '1qxat2121'},
  { id: 5, paid: false, fullname: 'Jose Lozado', orderdetail: '1azg121'}
]
const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription={'Historial de ordenes del cliente'} >
        <Typography variant='h1' component='h1'> Historial de ordenes</Typography>
        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
              <DataGrid 
                rows={ rows }
                columns={ columns }
                pageSize={10}
                rowsPerPageOptions={[10]}
              />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
