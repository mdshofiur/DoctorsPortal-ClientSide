import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography variant="h6" component="div" sx={{fontWeight:500,color: '#12d0d4',mt:5,mb:2}}>
                OUR SERVICES
             </Typography>
             <Typography variant="h4" component="div" sx={{fontWeight:600,mb:6}}>
                 Services We Provide
             </Typography>
               <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
               {services.map((service, index) => (
             <Grid item xs={1} sm={4} md={4} key={index}>
            <Service
            key={service.name}
            service={service}
            ></Service>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
    );
};

export default Services;