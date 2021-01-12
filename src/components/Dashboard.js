import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogout = async () => {
    // setError("");
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <h1>This is the Dashboard</h1>
      <h5>Email: {currentUser.email}</h5>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
}
