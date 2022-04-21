import { FC, useState } from 'react';
import { Box, IconButton, Typography } from "@mui/material"
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"

interface Props {
  quantity?: number
}
export const ItemCounter: FC<Props> = () => {
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () =>{
    if (quantity <= 1 ) return;
    const finalQuantity = quantity - 1;
    setQuantity(finalQuantity);
  }
  const incrementQuantity = () =>{
    const finalQuantity = quantity + 1;
    setQuantity(finalQuantity);
  }
  return (
    <Box display='flex' alignItems='center'>
      <IconButton 
        onClick={ decrementQuantity }
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}> { quantity } </Typography>
      <IconButton
         onClick={ incrementQuantity }
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
