import React from "react";

export default function Logout({ handleLogout }) {
  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
