import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const Input = styled(InputBase)({
  border: '2px solid white',
  borderRadius: '5px',
  color: 'white',
  padding: '0 10px',
  maxWidth: '600px',
  textAlign: 'center',
  justifyContent: 'center'
})

function Navbar({sidebar, setSidebar}) {
  const [open, setOpen] = useState(false)
  return (
    <AppBar sx={{padding: '10px 0'}} position='fixed'>
      <Toolbar variant="dense">
        <Typography sx={{display: {sm: 'none'}}} variant='h6' fontWeight='bold'>Book Shop</Typography>    
          <IconButton onClick={() => setSidebar(!sidebar)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {sidebar ? <CloseIcon sx={{display: {xs: 'none', sm: 'block'}}}/> : <MenuIcon sx={{display: {xs: 'none', sm: 'block'}}}/>}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
            BookShop
          </Typography>
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between' }} >
            <Input placeholder='Search your book...' sx={{marginLeft: {xs: '10px', sm: '50px'}, width: {xs: '60%', sm: '100%'}, alignItems: 'center'}}/>
            <Box sx={{alignItems: 'center', gap: '20px', display: 'flex'}}>
              <Badge sx={{display: {xs: 'none', sm: 'block'}}} badgeContent={4} color='error'><ShoppingCartIcon/></Badge>
              <Badge sx={{display: {xs: 'none', sm: 'block'}}} badgeContent={4} color='error'><NotificationsIcon/></Badge>
              <Badge sx={{display: {xs: 'none', sm: 'block'}}} badgeContent={5} color='error'><EmailIcon/> </Badge>
              <Badge>
              <Menu
                  open={open}
                  anchorOrigin = {{
                    vertical: 'top',
                    horizontal: "right"
                    }}
                    onClose={() => setOpen(false)}
                  >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
              </Menu>
                <Avatar onClick={() => setOpen(true)} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&s.jpg'/>
              </Badge>
            </Box>
                
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
