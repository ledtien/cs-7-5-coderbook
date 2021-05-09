import React from "react";

import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { authActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email });

  function onSubmit(e) {
    e.preventDefault();
    dispatch(authActions.register(email, password));
  }

  if (auth.loading) {
    return <h1>Registering....</h1>;
  }
  if (auth.redirectToHomePage) return <Redirect to="/" />;
  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export { AuthPage };
