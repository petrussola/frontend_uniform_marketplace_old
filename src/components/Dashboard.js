import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import AuthContext from "../context/AuthContext";
import Logout from "./Logout";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  // const { currentUser, logout } = useContext(AuthContext);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
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
      {currentUser && <h5>Email: {currentUser.email}</h5>}
      <Logout handleLogout={handleLogout} />
      {/* <button onClick={handleLogout} type="button">
        Logout
      </button> */}
    </div>
  );
}
