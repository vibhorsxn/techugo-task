import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
// import validation from './validation';

function Signup() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [password, setPassword] = useState(" ");
//   const [error,setError]=useState({
//    setError:"false"
//  })
const[emailError,setEmailError]=useState("");
const[passwordError,setPasswordError]=useState("");

  const history =useState();


//   function check() {
//     var regxn=/^([a-z A-Z]+)$/;
//     var regxe=/^([a-z A-Z 0-9 -\.]+)@([a-z 0-9 -]+).([a-z]{3,8})(.[a-z]{2,8})?$/;
// var regxw= /^[0-9 a-z A-Z @ # $ &]{8,20}$/;
//     if(name.trim()==="" || email.trim()==="" || password.trim()==="" || !(regxn.test(name)) || !(regxe.test(email)) || !(regxw.test(password)))
//     {
//         setError(true);
//     }
// }
function  valid() {
  if(!email.includes("@")){
   setEmail( {emailError:"Invalid Email"})
  }
}

  async function signup() {
    if(valid()){
    const item = { name, email, phone, password }
    let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item),
      // id: 1,
      // email: 'vibhor@gmail.com',
      // password: 123,
      // userId: 1,
     
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/add");
  }

  }
  return (
    <div className="sign-up" >
      <h1 className="signup-head">Be the User!</h1>
      <div className="signup-container">
      <Form >
        <Form.Group className="mb-3" controlId="formBasicName">

          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

        </Form.Group>

{/* INPUT EMAIL */}

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            // name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            
            />
            <p>{emailError}</p>
            
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          
        </Form.Group>
        
       

        <Form.Group className="mb-3" controlId="formBasicMobile">

          <Form.Label>Enter Mobile No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="91XXXXXXXX"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            
            required
          />
          
        </Form.Group>
        
        
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button
          variant="outline-success"
          //   type="submit"
          
          onClick={signup}
          
        >
          Submit
        </Button>
        You already have an account. <Link to="/login">Log In</Link>
      </Form>
      </div>
    </div>

  )
}

export default Signup;