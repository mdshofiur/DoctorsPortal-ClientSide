import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Calender/Calender';

const AppointmentHeader = ({date,setdate}) => {

    return (
        <div style={{marginTop:30,paddingBottom:50}} >
           <Container >
               <Grid container spacing={2}>
                 <Grid xs={12} md={6} >
                  <Calender date={date} setdate={setdate}></Calender>
                 </Grid>
                  <Grid xs={12} md={6}>
                  <img src={chair} style={{width: '100%'}} alt="" />
                  </Grid>
               </Grid>
           </Container>
        </div>
    );
};

export default AppointmentHeader;