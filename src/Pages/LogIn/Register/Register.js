import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography,Button } from '@mui/material';
import logins from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {useLocation,useHistory} from 'react-router-dom';

const Register = () => {

    const [logindata,setlogindata] = useState({})
    const {user,registerUser,isLoading,error} = useAuth();
    
    const history = useHistory();


    const handleOnBlur = (e)=>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...logindata};
       newLoginData[field] = value;
       setlogindata(newLoginData);
   }
   
   const handlelogin = (e)=>{
    e.preventDefault();

     if (logindata.password !== logindata.password2){
       alert("Password did not match");
       return 
     
     } else{
      registerUser(logindata.email, logindata.password,logindata.name,history);
     }
    
   
   }

console.log(logindata.password);

    return (
        <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:20}} item xs={12} md={6}>
           <Typography sx={{pb:2}} variant="body1" gutterBottom>
           Register
           </Typography>
           {!isLoading && <form  action="" onSubmit={handlelogin}>

           <TextField
            sx={{width: '75%'}}
             id="standard-basic4"
             label="Your Name"
             variant="standard"
             name="name"
             onBlur={handleOnBlur}
             />

           <TextField
            sx={{width: '75%'}}
             id="standard-basic"
             label="Your Email"
             variant="standard"
             name="email"
             onBlur={handleOnBlur}
             />
              <TextField
               sx={{width: '75%'}}
             id="standard-basic2"
             label="Password"
             variant="standard"
             type="password"
             name="password"
             onBlur={handleOnBlur}
             />

            <TextField
            sx={{width: '75%'}}
             id="standard-basic3"
             label="Re-Type Password"
             variant="standard"
             type="password"
             name="password2"
             onBlur={handleOnBlur}
             />

             <Button type='submit' sx={{width: '75%',mt:2}} variant="contained">Sign Up</Button>
             <NavLink style={{textDecoration:'none'}} to="/login" ><Button color="inherit">Already Registered? Please LogIn</Button></NavLink>
           </form>}
           {isLoading && <CircularProgress />}
           {user?.email &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="success">This is a success alert — check it out!</Alert>}
           {error &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="error">This is an error alert — check it out!</Alert>}
         </Grid>

           <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={logins} alt="" />
          </Grid>
          </Grid>
       </Container>
    );
};

export default Register;