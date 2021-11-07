import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Register from './Pages/LogIn/Register/Register';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment/>
          </PrivateRoute>
          <Route path="/login">
            <LogIn/>
          </Route> 
          <Route path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
