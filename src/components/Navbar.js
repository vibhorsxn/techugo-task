import React from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import Banner from './Banner';
import Users from './Users';
import Cards from './Cards';
import Cast from './Cast';
import Weather from './Weather';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Amazon-music';
import Podcast from './Podcast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Navbar from './style/Navbar.css'
function navbar(){
    return(

<div className="Head">
<Router> 
<Navbar bg="dark" sticky="top" >

  <Container>
    <Navbar.Brand href="#home">
      
     {/* <img style={{width:"10%",height:"10%"}}src="https://www.logo.wine/a/logo/Avengers_(comics)/Avengers_(comics)-Symbol-Logo.wine.svg" alt="co-logo"/> */}
     
     <img style={{width:"40%",height:"10%"}}src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg" alt="co-logo"/>
     
     {/* Avengers  */}
     <Nav style={{color:"white"}} className="page">
       
      <Link to="/">Home</Link>
      <Link to="/podcast">Poadcast</Link>
      <Link to="/podcast">Library</Link>
      </Nav>

      <NavDropdown  style={{color:"white"}} title="">
      <NavDropdown.Item href="Products/Accesories">Music</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Podcast</NavDropdown.Item>
           </NavDropdown> 
      </Navbar.Brand>
     
      

      {/* <Link to="/users">Users</Link> */}
      {/* <Link to="/cards">Podcast</Link> */}
      {/* <Link to="/cast">Cast</Link> */}
      {/* <Link to="/weather">Weather</Link> */}
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/dashboard">Dashboard</Link> */}
      {/* <img src="" alt="search-bar"/> */}

      {/* DROPDOWN */}
       
      
    <input className="search-bar"  placeholder="Search"/>
    {/* <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="search-icon"/> */}

    <NavDropdown style={{color:"white",}} title="">
      
    
      <NavDropdown.Item href="Products/Accesories">Vibhor Saxena</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Your Amazon Music Settings</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Music Preferences</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Change Display Language</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Block Explicit Songs</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Terms and Conditions</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Get Help</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Sign Out</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Download Desktop App</NavDropdown.Item>
    
           </NavDropdown> 
           <img className="login-icon" src="https://img.icons8.com/ios-filled/50/ffffff/test-account.png" alt="login"/>


    {/* <Nav.Link href="./Cards.js">AboutUs</Nav.Link> */}
    
    
    {/* </Nav> */}

    
    
    
  </Container>
  
  
</Navbar>

  <Switch className="pages">
      <Route exact path="/"><Dashboard/></Route>
      <Route path="/users"> <Users /> </Route>
      <Route path="/cards"> <Cards /> </Route>
      <Route path="/cast"> <Cast /> </Route>
      <Route path="/weather"> <Weather /> </Route>
      <Route path="/login"> <Login /> </Route>
      <Route path="/signup"> <Signup /> </Route>
      <Route path="/dashboard"> <Dashboard /> </Route>
      <Route path="/podcast"> <Podcast /> </Route>

            
  </Switch>
            </Router>

  </div>


)
}

export default navbar;
