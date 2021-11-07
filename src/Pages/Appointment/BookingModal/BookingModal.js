import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({open,handleClose,booking,date}) => {

    const {name,time} = booking;
    const {user} = useAuth();

      const handleBookSubmit = (e) => {
         alert("Done")
    
         handleClose()
       e.preventDefault();
     }




    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <form action="" onSubmit={handleBookSubmit} >
              <TextField sx={{width: '90%'}} id="outlined-size-small" defaultValue={time} size="small" disabled />
              <TextField sx={{width: '90%'}} id="outlined-size-small" defaultValue={user.displayName} size="small"  />
              <TextField sx={{width: '90%'}} id="outlined-size-small" defaultValue={user.email} size="small"  />
              <TextField sx={{width: '90%'}} id="outlined-size-small" placeholder="Phone" size="small"  />
              <TextField sx={{width: '90%'}} id="outlined-size-small" defaultValue={date.toDateString()} size="small"  disabled/>
              <Button sx={{mt:2}} type="submit" variant="contained">Book Now</Button>
           </form>
          </Typography>
        </Box>
      </Modal>
      
    );
};

export default BookingModal;