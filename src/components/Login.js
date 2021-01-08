import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const initialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [user, setUser] = useState(initialValue); // holds value of form being filled
  const history = useHistory();

  const onChangeHandle = () => {
    setUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setUser(initialValue);
      history.push("/dashboard");
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
        <Card.Title className="text-center">Log In</Card.Title>
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
            <Button block type="submit" disabled={loading}>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
