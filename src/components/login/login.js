import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPasssword] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent reload of page
    setUserData({ userName, password });
    setUserName("");
    setPasssword("");
    console.log(userData);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Login</h2>
      {/* form>input*2+button:submit */}
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="user name"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPasssword(event.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>

      <h2> {userData && JSON.stringify(userData, null, 10)} </h2>
    </div>
  );
}
