import { useContext, useState } from 'react'
import NextLink from 'next/link'
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge, Input, InputAdornment } from "@mui/material"
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { UiContext } from '../../context/ui/UiContext';

export const Navbar = () => {
  const { asPath, push }= useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchTerm = ()=> {
      if(searchTerm.trim().length == 0 ) return;
      push(`/search/${searchTerm}`);
  }
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display="flex" alignItems='center'>
            <Typography variant='h6'>Teslo</Typography>
            <Typography sx={{
              ml: 0.5
            }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box  flex={1}/>

        <Box 
            sx={{ display: isSearchVisible ? 'none' : { xs:'none', sm:'block' }}} 
            className='fadeIn'
        >
          <NextLink href='/category/men' passHref>
            <Link>
              <Button color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button color={ asPath === '/category/women' ? 'primary' : 'info' }>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Link>
              <Button color={ asPath === '/category/kid' ? 'primary' : 'info' }>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box  flex={1}/>
        {
          isSearchVisible
          ?(
          <Input
            className='fadeIn'
            sx={{ display: { xs:'none', sm:'flex' }}} 
            autoFocus
            value={searchTerm}
            onChange={ (e)=> setSearchTerm(e.target.value) }
            onKeyPress={(e)=> e.key === 'Enter' ? onSearchTerm() : null }
            type='text'
            placeholder="Buscar..."
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    onClick={ () => setIsSearchVisible(false) }
                    >
                     <ClearOutlined />
                    </IconButton>
                </InputAdornment>
            } />
          )
          :
          <IconButton  
            sx={{display: {xs: 'none', sm:'block'}}}
            onClick={ () => setIsSearchVisible(true) }
            >
            <SearchOutlined />
          </IconButton>
        }
        
        
        <IconButton 
          sx={{display: {xs: 'flex', sm:'none'}}}
          onClick={ toggleSideMenu }
        >
            <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCartOutlined/>
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button
          onClick={ toggleSideMenu }
        >
          Menu
        </Button>
      </Toolbar>

    </AppBar>
  )
}
