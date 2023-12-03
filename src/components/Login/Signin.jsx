import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();

  const { loading, setLoading } = useFirebase();
  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await firebase.signin(email, password, e);
      toast.success("Login Successful");
      localStorage.setItem("user", JSON.stringify(result));
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("Signup Failed");
      return;
    }
    // Signup was successful
    setEmail("");
    setPassword("");
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="form-container" id="login-form">
        {loading && <Loader />}
        <h1>Login</h1>
        <form onSubmit={(e) => handleSignIn(e)}>
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
