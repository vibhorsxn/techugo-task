import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import Banner from './Banner';
import Users from './Users';
import Cards from './Cards';
import Cast from './Cast';
import Weather from './Weather';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
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
<Navbar bg="myRed" sticky="top" >

  <Container>
    <Navbar.Brand href="#home">
      
     <img style={{width:"10%",height:"10%"}}src="https://www.logo.wine/a/logo/Avengers_(comics)/Avengers_(comics)-Symbol-Logo.wine.svg" alt="co-logo"/>
     Avengers 
      </Navbar.Brand>
      <Nav className="page">
      <Link to="/">Home</Link>
      {/* <Link to="/users">Users</Link> */}
      <Link to="/cards">AboutUs</Link>
      <Link to="/cast">Cast</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      


    {/* <Nav.Link href="./Cards.js">AboutUs</Nav.Link> */}
    
    {/* <NavDropdown title="Prodcuts">
      <NavDropdown.Item href="Products/Accesories">Accessories</NavDropdown.Item>
      <NavDropdown.Item href="Products/Badges">Badges</NavDropdown.Item>
      <NavDropdown.Item href="Products/Fudge">Fudge</NavDropdown.Item>
      <NavDropdown.Divider/>
      <NavDropdown.Item href="Products/Merchandise">Merchandise</NavDropdown.Item>
      
     </NavDropdown> */} 
    </Nav>

    
    
    
  </Container>
  
  
</Navbar>
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Superheros
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Characters</Breadcrumb.Item>
</Breadcrumb> 
<Switch className="pages">
      <Route exact path="/"><Banner/></Route>
      <Route path="/users"> <Users /> </Route>
      <Route path="/cards"> <Cards /> </Route>
      <Route path="/cast"> <Cast /> </Route>
      <Route path="/weather"> <Weather /> </Route>
      <Route path="/login"> <Login /> </Route>
      <Route path="/signup"> <Signup /> </Route>
      <Route path="/dashboard"> <Dashboard /> </Route>
            
            </Switch>
            </Router>

  </div>


)
}

export default navbar;
