import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import background from '../../../images/bg.png';
import { Typography } from '@mui/material';
import { Button,Container } from '@mui/material';


const bannerBg =  {
    background: `url(${background})`,
   
}

const center = {
    display: 'flex',
    alignItems: 'center',
    height:400
  }

const Banner = () => {
    return (
        <Container style={bannerBg}  sx={{ flexGrow: 1,mt:3 }}>
        <Grid container spacing={2}>
          <Grid item style={{...center,textAlign:'left'}} xs={12} md={5}>
            <Box>
            <Typography variant="h3">
                Your New Smile <br/>
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{fontSize:14,color:'gray',fontWeight:300,py:3}}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus dicta excepturi nulla! Asperiores repellat minus vel consequuntur officiis excepturi?
            </Typography>
            <Button style={{background: '#46DAE2',color: 'white'}}>GET APPOINTMENT</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} style={center}>
             <img style={{width:'450px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;