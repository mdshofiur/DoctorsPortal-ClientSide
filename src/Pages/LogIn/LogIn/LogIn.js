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


   const LogIn = () => {

    const [logindata,setlogindata] = useState({})
    const {user,userLogIn,isLoading,error,signinwithgoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
     const handleOnchnage = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        setlogindata(newLoginData);
    
    }
    
    const handlelogin = (e)=>{
      
      userLogIn(logindata.email,logindata.password,location,history)

       e.preventDefault();
    }

    
       const googleSignin = () => {
        signinwithgoogle(location, history);
       }




    return (
       <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:20}} item xs={12} md={6}>
           <Typography sx={{pb:2}} variant="body1" gutterBottom>
            Log In
           </Typography>
           <form  action="" onSubmit={handlelogin}>
           <TextField
           sx={{width: '75%'}}
             id="standard-basic1"
             label="Your Email"
             variant="standard"
             name="email"
             onChange={handleOnchnage}
             />
              <TextField
               sx={{width: '75%'}}
             id="standard-basic2"
             label="Password"
             variant="standard"
             type="password"
             name="password"
             onChange={handleOnchnage}
             />
             <Button type="submit" sx={{width: '75%',mt:2}} variant="contained">Log In</Button>
             <NavLink style={{textDecoration:'none'}} to="/register" ><Button color="inherit">New user? Please Register</Button></NavLink>
             {isLoading && <CircularProgress />}
           {user?.email &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="success">This is a success alert — check it out!</Alert>}
           {error &&  <Alert style={{marginLeft: '70px',marginTop: '30px'}} severity="error">This is an error alert — check it out!</Alert>}
           </form>
           
           <p>-----------------</p>
           <Button onClick={googleSignin} variant="contained">Google sign In</Button>

         </Grid>
           <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={logins} alt="" />
          </Grid>
          </Grid>
       </Container>
    );
};

export default LogIn;