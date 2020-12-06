import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if passwords match, submit email and pw to firebase
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErrorMessage({
        type: "danger",
        message: "Passwords do not match",
      });
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setErrorMessage({ type: "success", message: "You can now Log in" });
    } catch (error) {
      setErrorMessage({
        type: "danger",
        message: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <Card className="mx-auto" style={{ maxWidth: "400px" }}>
      <Card.Title className="text-center">Sign Up</Card.Title>
      <Card.Body>
        {errorMessage.type && (
          <Alert variant={errorMessage.type}>{errorMessage.message}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button block type="submit" disabled={loading}>
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
