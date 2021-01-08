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
          <Form onSubmit={handleSubmit} data-testid="form">
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                value={user.email}
                onChange={onChangeHandle}
                data-testid="input-email"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
                value={user.password}
                onChange={onChangeHandle}
                data-testid="input-password"
              />
            </Form.Group>
            <Button
              block
              type="submit"
              disabled={loading}
              data-testid="submit-button"
            >
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
