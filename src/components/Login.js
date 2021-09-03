// import React,{useState} from 'react';
// import {Form,Button} from 'react-bootstrap'
// import {Link} from "react-router-dom";



// function Login(){
//     const[email,setEmail] =useState(" ");
//     const[password,setPassword] =useState(" ");
//     const history =useState();


//     async function user(){
//       let item={email,password};
//       let result= await fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     "Content-type": "application/json" ,
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(item),
  
// });
// result =await result.json();
// localStorage.setItem("user-info",JSON.stringify(result))
// history.push("/add");
  
//     }

    

//     return(
// <div className="login">
// <h1 className="login-head">Welcome User!</h1>

//     <div className="login-container">
//      <Form >
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control 
//      type="email"
//      placeholder="Enter email" 
//      onChange={(e)=>setEmail(e.target.value)} 
//      required/>
     
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3 w-2" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control 
//      type="password"
//      placeholder="Password" 
//      onChange={(e)=>setPassword(e.target.value)}
//      required
//      />
//   </Form.Group>
 
//   <Button 
//   onClick={user}
// //   type="submit" 
//   variant="outline-success">Log In</Button>{' '}
//   If you don't have account. <Link to="/signup">Sign up</Link>
// </Form>

    
//     </div>


// </div>
// )
// }

// export default Login;

import React from "react";
import {Link} from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Username is Empty";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }
    if(!this.state.password.length>5){
      passwordError="Password must be more than 5"
    }

    if (emailError || passwordError || nameError) {
      this.setState({ emailError, nameError, passwordError});
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState({
        nameError:"",
        emailError:"",
        passwordError:""
      });
    }
  };

  render() {
    return (
      <div className="login" >
        <h1 className="login-head">Welcome User!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              placeholder="Enter Username"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <br />
          <div>
            <input
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <br />
          <button class="btn btn-success"type="submit">Submit</button>{" "}
          If you don't have account. <Link to="/signup">Sign up</Link>
        </form>
      </div>
    );
  }
}