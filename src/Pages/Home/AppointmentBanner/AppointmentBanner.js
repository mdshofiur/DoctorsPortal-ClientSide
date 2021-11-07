import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    
}


const AppointmentBanner = () => {
    return (
         <Box style={appointmentBg} sx={{ flexGrow: 1,mb:10}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <img
           style={{width:460,marginTop:-110}}
           src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
             display: 'flex',
             justifyContent: 'flex-start',
             textAlign: 'left',
             alignItems: 'center'
           }}>
           <Box>
           <Typography variant="h6" sx={{mb:3}} style={{color: '#12d0d4'}}>
              Appointment
           </Typography>
           <Typography variant="h4" sx={{pb:3}} style={{color: 'white'}}>
            Make an appointment Today
           </Typography>    
            <Typography variant="h6" sx={{pb:4}} style={{color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus praesentium ipsum.
           </Typography>
           <Button style={{background: '#46DAE2',color: 'white'}}  sx={{mb:4}}>Learn More</Button>
           </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;