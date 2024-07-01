import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Main() {
  return (
    <Box flex={4}>
        <Typography variant='h4' textAlign='center' p={3}>New Books</Typography>
       <Box sx={{display: 'grid', gridTemplateColumns: {xs: '100%', sm: '48% 48%', md: '32% 32% 32%', lg: '23% 23% 23% 23%'}, gap: '10px'}}>
        <Card sx={{marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/thumbs/images/g/YDsAAOSwjXZcXHx5/s-l1600.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ marginTop: '10px'}}>
            <img src="https://i.ebayimg.com/images/g/UIIAAOSw1tRgABtq/s-l500.jpg" alt="" style={{width: '100%'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: 'small', md: 'medium', xl: '1.5rem'}}}>
                React, Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
       </Box> 
    </Box>
  )
}

export default Main
