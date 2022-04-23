import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../../components/layouts/AuthLayout'
import NextLink from 'next/link';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Crear una cuenta en Teslashop'}>
        <Box sx={{ width: 350, padding: '10px 20px', mt: 25}}>
          <Grid container spacing={2}>
            <Grid item xs={12} display='flex' justifyContent='center'>
              <Typography component='h1' variant='h1'>Crear una cuenta</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Nombre' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Email' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Password' type='password' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Confirm Password' type='password' variant='filled' fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <Button color='secondary' className='circular-btn' size='large' fullWidth>
                Crear 
              </Button>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='end'>
              <NextLink href='/auth/login' passHref>
                <Link underline='always' >
                  ¿Ya tienes una cuenta? Inicia Sesion aqui
                </Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage
