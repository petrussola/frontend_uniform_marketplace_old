import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const initialValue = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [user, setUser] = useState(initialValue); // holds value of form being filled

  const onChangeHandle = () => {
    setUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: passwordConfirmRef.current.value,
    });
  };

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
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setErrorMessage({ type: "success", message: "You can now Log in" });
      setUser(initialValue);
    } catch (error) {
      setErrorMessage({
        type: "danger",
        message: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Card className="mx-auto" style={{ maxWidth: "400px" }}>
        <Card.Title className="text-center">Sign Up</Card.Title>
        <Card.Body>
          {loading && "Loading..."}
          {errorMessage.type && (
            <Alert variant={errorMessage.type}>{errorMessage.message}</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                ref={emailRef}
                required
                value={user.email}
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
                value={user.password}
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="passwordConfirm">
                Confirm Password
              </Form.Label>
              <Form.Control
                id="passwordConfirm"
                type="password"
                ref={passwordConfirmRef}
                required
                value={user.confirmPassword}
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Button block type="submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
}
