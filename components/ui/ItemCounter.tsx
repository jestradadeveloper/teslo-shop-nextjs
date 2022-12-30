import { FC, useState } from 'react';
import { Box, IconButton, Typography } from "@mui/material"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"

interface Props {
  currentValue: number;
  maxValue: number;
  //methods
  updatedQuantity: (newValue: number) => void ;
}
export const ItemCounter: FC<Props> = ({currentValue, updatedQuantity, maxValue}) => {
  const decrementQuantity = () =>{
    if (currentValue <= 1 ) return;
    const finalQuantity = currentValue - 1;
    updatedQuantity(finalQuantity);
  }
  const incrementQuantity = () =>{
    if (currentValue >= maxValue) return;
    const finalQuantity = currentValue + 1;
    updatedQuantity(finalQuantity);
  }
  return (
    <Box display='flex' alignItems='center'>
      <IconButton
        onClick={ decrementQuantity }
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}> { currentValue } </Typography>
      <IconButton
         onClick={ incrementQuantity }
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
