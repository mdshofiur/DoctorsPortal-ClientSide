import React from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking,date}) => {

    const {name,time,space} = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <>
         <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py:5}}>
          <Typography style={{color: '#35D7D6', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
             {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
             {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom >
             {space} Spaces Available
          </Typography>
          <Button onClick={handleOpen} variant="contained" color="success">
           BOOK APPOINTMENT
        </Button>
        </Paper>
        </Grid>
        <BookingModal
        booking={booking}
        handleClose={handleClose}
        open={open}
        date={date}
        ></BookingModal>
      </>
    );
};

export default Booking;