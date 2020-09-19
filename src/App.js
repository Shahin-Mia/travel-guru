import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Login/Login';
import Booking from './component/Booking/Booking';
import Hotel from './component/Hotel/Hotel';
import PrivateRoute from './PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/booking/hotel/:placeName">
            <Hotel />
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:placeId">
            <Booking></Booking>
          </Route>
          <Router exact path="/">
            <Home></Home>
          </Router>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
