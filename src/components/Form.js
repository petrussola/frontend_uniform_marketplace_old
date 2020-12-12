import React, { useState } from "react";

const initialValue = {
  email: "",
};

export default function Form() {
  const [user, setUser] = useState(initialValue);

  const changeHandler = (e) => {
    console.log(e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <p>{user.email}</p>
    </div>
  );
}
