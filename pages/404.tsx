import { Box, IconButton, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts"
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
const Custom404 = () => {
  return (
    <ShopLayout title='Error 404' pageDescription={"No hay nada que mostrar aqui"}>
        <Box sx={{ flexDirection: {xs:'column', sm:'row'}}} display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' color='#d63031'>
          <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: 60 }}  />
          <Typography variant="h1" component='h1' fontSize={60} fontWeight={200}>404</Typography>
          <Typography variant="h2" component='h2' fontSize={80} fontWeight={200} marginLeft={2} sx={{ display: {xs:'none', sm:'block'}}} >|</Typography>
          <Typography marginLeft={2}>No hay nada que mostrar aqui</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404;
