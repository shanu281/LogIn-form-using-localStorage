import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const getData = (event) => {
    const { value, name } = event.target;
    setLoginData(() => {
      return {
        ...loginData,
        [name]: value,
      };
    });
  };
  const handleSubmit =(e) =>{
      e.preventDefault();
      const getStoredData = localStorage.getItem("localData")
      const storedData = JSON.parse(getStoredData)
      console.log(getStoredData)
      console.log(storedData)
      const {email,password} = loginData;
      if(email===""){
          alert("Email is required")
      }else if(!email.includes("@")){
        alert("Enter a valid Email")
    }else if(password===""){
        alert("Password is required")
    }else {
        if(getStoredData && getStoredData.length){
            console.log(storedData)
           const userLogin= storedData.filter((data, i) => {
                if(data.email === email && data.password===password){
                    
                        alert("sucess")
                           history("/article")
                        
                }else {
                    alert("invalid credential")
                }
            })
       
        }
    }
  }
  console.log(loginData);
  return (
    <div className="container mt-3 ">
      <section>
        <div className="left_data">
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
            <Form.Group
              className="mb-3 mt-3 col-lg-6"
              controlId="formBasicEmail"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={getData}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
            onClick={handleSubmit}
              className="col-lg-3 "
              variant="primary"
              type="submit"
              style={{ background: "green", width: 250 }}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="right_data"></div>
      </section>
    </div>
  );
};

export default Login;
