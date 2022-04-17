import React from "react";
import { Link } from "react-router-dom";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, EmailUser, EmailLoading, EmailError] =
    useSignInWithEmailAndPassword(auth);

  var errorElement;

  if (EmailError) {
    errorElement = <p className="text-danger">{EmailError.message};</p>;
  }
  const handelLogin = (event) => {
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Login</h1>
        {errorElement}
        <form onSubmit={handelLogin}>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={google} alt="" />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={facebook} alt="" />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={github} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
