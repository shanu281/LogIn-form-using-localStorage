import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React from "react";

const Register = () => {
  return (
    <div className="container mt-3">
      <section>
        <div className="left_data">
          <h3>Register</h3>
          <Form>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-13 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-13" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-13" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            

            <Button variant="primary" type="submit" style={{background: "green"}}>
              Submit
            </Button>
          </Form>
        </div>
        <div className="right_data"></div>
      </section>
    </div>
  );
};

export default Register;
