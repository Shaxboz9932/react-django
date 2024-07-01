import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch } from '@mui/material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import DataArrayOutlinedIcon from '@mui/icons-material/DataArrayOutlined';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function SideBar({sidebar}) {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
    setOpen(!open);
    };

  return (
    <Box flex={1} sx={{display : {xs: 'none', sm: sidebar ? 'block' : 'none' }}}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CategoryIcon/>
        </ListItemIcon>
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>  

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Web Dasturlash" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DataArrayOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Data Science" />
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FlagCircleIcon />
            </ListItemIcon>
            <ListItemText primary="For Beginner" />
          </ListItemButton>
        </List>
      </Collapse>
<hr />
      <ListItemButton>
        <ListItemIcon>
          <LocalMallIcon />
        </ListItemIcon>
        <ListItemText primary="Savatcha" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Sozlamalar" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <FavoriteBorderIcon />
        </ListItemIcon>
        <ListItemText primary="Tanlanganlar" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LocalPoliceIcon />
        </ListItemIcon>
        <ListItemText primary="Bog'lanish" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary="Buyrutmalar" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ModeNightIcon />
        </ListItemIcon>
        <Switch></Switch>
      </ListItemButton>

    <AddCircleIcon color='secondary' sx={{width: '60px', height: '60px', bottom: '0px', margin: '10px', position: 'fixed'}}/>
      
    </List>
    </Box>
  )
}

export default SideBar
