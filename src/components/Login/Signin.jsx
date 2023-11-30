import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase()
  return (
    <div className="container">
      <div className="form-container" id="login-form">
        <h1>Login</h1>
        <form onSubmit={(e)=>firebase.signin(email,password,e)}>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="#" id="signup-link">
            Sign up
          </a>
        </p>
      </div>

   
    </div>
  );
};

export default Signin;
