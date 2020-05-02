import React, { useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};
export default function Register() {
  const [form, setForm] = useState(initialFormState);

  const [user, setUser] = useState(null);

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        <h2>Register</h2>
        <form
          style={{
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
          }}
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            placeholder="user name"
            name="username"
            value={form.username}
            onChange={handleOnChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>{user && JSON.stringify(user)}</h2>
      </div>
    </div>
  );
}
