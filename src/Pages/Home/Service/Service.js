import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {

 const {name,description,img} = props.service;

    return (
        <div>
        <Card sx={{ minWidth: 275, border:0,boxShadow:0}}>
        <CardMedia
        component="img"
        style={{width: 'auto',height:'80px',margin:'0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
};

export default Service;