import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  // const { logout } = useAuth();
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <div>
      <h1>This is the Dashboard</h1>
      <button onlick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
}
