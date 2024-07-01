import styled from '@emotion/styled'
import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

const ImageBox = styled(Box)({

})

function RightBar() {
  return (
    <Box flex={2} >
        <Typography variant="h6" color="inherit" component="div" sx={{display: {xs: 'none', sm: 'block', padding: '30px'}}}>
            Yangi Kitoblar
        </Typography>
        <ImageBox>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RGzlbOfuzyX22Yy_LxIcT1In8K3jVI3hw&s.jpg" alt="" />
            <Typography>Java Programming</Typography><Rating></Rating>
            <Typography>Author: Robbi Lawyer</Typography>
        </ImageBox>
        <ImageBox>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RGzlbOfuzyX22Yy_LxIcT1In8K3jVI3hw&s.jpg" alt="" />
            <Typography>Java Programming</Typography><Rating></Rating>
            <Typography>Author: Robbi Lawyer</Typography>
        </ImageBox>
        <ImageBox>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RGzlbOfuzyX22Yy_LxIcT1In8K3jVI3hw&s.jpg" alt="" />
            <Typography>Java Programming</Typography><Rating></Rating>
            <Typography>Author: Robbi Lawyer</Typography>
        </ImageBox>
        <Typography variant="h6" color="inherit" component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
            Eng Ko'p Sotilgan
        </Typography>
        <Typography variant="h6" color="inherit" component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
            Buyrutma Kitoblar
        </Typography>
    </Box>
  )
}

export default RightBar

