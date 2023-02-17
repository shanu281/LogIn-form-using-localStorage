import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";

const Login = () => {
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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={getData}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted"></Form.Text>
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
              className="col-lg-3 "
              variant="primary"
              type="submit"
              style={{ background: "green" }}
            >
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account{" "}
            <span>
              <a href="#">Log In</a>
            </span>
          </p>
        </div>
        <div className="right_data"></div>
      </section>
    </div>
  );
};

export default Login;
