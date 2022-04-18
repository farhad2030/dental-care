import React, { useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";

import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  // react-firebase-hook
  const [signInWithEmailAndPassword, EmailUser, EmailLoading, EmailError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Reseterror] =
    useSendPasswordResetEmail(auth);
  const [user, loading, error] = useAuthState(auth);

  var errorElement;

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (EmailError || Reseterror) {
    errorElement = (
      <p className="text-danger">
        {EmailError?.message || Reseterror?.message};
      </p>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handelLogin = (event) => {
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  const emailRef = useRef("");
  const forgetPassword = () => {
    if (emailRef.current.value) {
      sendPasswordResetEmail(emailRef.current.value);
      toast.success("Reset password Link send to the email");
    } else {
      toast.warn("Enter your Email");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Login</h1>
        {errorElement}
        <form onSubmit={handelLogin}>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              ref={emailRef}
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
              <a href="#!" onClick={forgetPassword}>
                Forgot password?
              </a>
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
