import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    <Box 
         display='flex' 
         justifyContent='center' 
         flexDirection='column'
         alignItems='center' 
         height='calc(100vh - 200px)' 
         color='#0a186c'
    >
      <Typography variant='h2' component='h2' sx={{ marginBottom:4 }}>Loading</Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
