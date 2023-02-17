import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';

import React,{useState} from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    userName:"",
    email:"",
    date:"",
   password :"",
   confirmPassword: ""
  })
  const [data, setData] = useState([]);

  const getData =(event) =>{
    const {value, name} = event.target
    setRegisterData(() =>{
      return{
        ...registerData, [name]:value
      }
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    const {userName, email, date,password, confirmPassword} = registerData
    if(userName===""){
      alert("User Name is required")
    }else if(email===""){
      alert("Email is required")
    }else if(!email.includes("@")){
      alert("Enter valid Email")
    }
    else if(date===""){
      alert("Date is required")
    }else if(password===""){
      alert("Password is required")
    }else if(password.length<5){
      alert("Password length must be greater than 5")
    }else if(confirmPassword===""){
      alert("Confirm Password Required")
    }
    else if(confirmPassword !=password){
      alert("Password doesn't match")
    }else {
      alert("Data sent sucessfully")
localStorage.setItem("localData", JSON.stringify([...data,registerData]))
    }
  }
 console.log(registerData)
  return (
    <div className="container mt-3">
      <section>
        <div className="left_data">
          <h3>Register</h3>
          <Form>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control onChange={getData} name="userName" type="text" placeholder="Enter User Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={getData} type="email" name="email" placeholder="name@example.com" />
      </Form.Group>
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control onChange={getData} name="date" type="date" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={getData} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={getData} name="confirmPassword" type="password" placeholder="Confirm Password" />
            </Form.Group>
            

            <Button onClick={handleSubmit} className="mt-4" variant="primary" type="submit" style={{background: "green", width:250, alignItems:"center"}}>
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account
            <span>
            <Nav.Link href="/login" style={{color: "blue"}}>Log In</Nav.Link>
             
            </span>
          </p>
        </div>
        <div className="right_data"></div>
      </section>
    </div>
  );
};

export default Register;
