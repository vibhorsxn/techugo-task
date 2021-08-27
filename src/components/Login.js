import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import {Link} from "react-router-dom";



function Login(){
    const[email,setEmail] =useState(" ");
    const[password,setPassword] =useState(" ");
    const history =useState();

    // function login(){
    //     console.log(email,password);
    // }

    async function user(){
      let item={email,password};
      let result= await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    "Content-type": "application/json" ,
    "Accept": "application/json"
  },
  body: JSON.stringify(item),
  // id: 1,
    // email: 'vibhor@gmail.com',
    // password: 123,
    // userId: 1,
});
result =await result.json();
localStorage.setItem("user-info",JSON.stringify(result))
history.push("/add");
  
    }

    // function valid(){
    //   if(user.email===Login.setEmail)
    //   console.alert("valid user");
    // }

    return(
<div className="login">
<h1 className="login-head">Welcome User!</h1>

    <div className="login-container">
     <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
     type="email"
     placeholder="Enter email" 
     onChange={(e)=>setEmail(e.target.value)} 
     required/>
     
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-2" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
     type="password"
     placeholder="Password" 
     onChange={(e)=>setPassword(e.target.value)}
     required
     />
  </Form.Group>
 
  <Button 
  onClick={user}
//   type="submit" 
  variant="outline-success">Log In</Button>{' '}
  If you don't have account. <Link to="/signup">Sign up</Link>
</Form>

    
    </div>


</div>
)
}

export default Login;

