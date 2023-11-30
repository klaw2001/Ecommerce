import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";

const Signup = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">
              Register <a href="http://opensnippets.com">open snippets</a>
            </h2>
            <div class="card-body py-md-4">
              <form
                onSubmit={() =>
                  firebase.signupUserWithEmailAndPassword(email, password)
                }
              >
                <div class="form-group"></div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                {/* <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="confirm-password"
                  />
                </div> */}
                <div class="d-flex flex-row align-items-center justify-content-between">
                  <a href="#">Login</a>
                  <button class="btn btn-primary" type="submit">
                    Create Account
                  </button>
                </div>
                <button
                  className="btn btn-outline-primary"
                  // onClick={(e) => signupWithGoogle(e)}
                >
                  Signup with google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
