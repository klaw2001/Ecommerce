import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = useFirebase();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await firebase.signUpUser(name, email, password, e);
      setTimeout(() => navigate("/login"), 3000);

      
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("Signup Failed");
      return;
    }
    // Signup was successful
    setName("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="container position-relative">
        {loading && <Loader />}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h2 className="card-title text-center">
                Register <a href="http://opensnippets.com">open snippets</a>
              </h2>
              <div className="card-body py-md-4">
                <form onSubmit={handleSignup}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <a href="#">Login</a>
                    <button className="btn btn-primary" type="submit">
                      Create Account
                    </button>
                  </div>
                  <button
                    className="btn btn-outline-primary"
                    // onClick={(e) => signupWithGoogle(e)}
                  >
                    Signup with Google
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
