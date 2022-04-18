import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../../../firebase.init";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";
import { async } from "@firebase/util";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [
    signInWithGoogle,
    GoogleProvideruser,
    GoogleProviderLoding,
    GoogleProviderError,
  ] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    EmailProvideruser,
    EmailProvidererror,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let errorElement;

  var navigate = useNavigate();

  const handelRegister = async (event) => {
    event.preventDefault();

    var name = event.target.name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home", { state: "A verification link is sent" });
    // toast.info("A verification link is sent");
  };

  const handelGoogleSignin = () => {
    signInWithGoogle();
  };

  if (GoogleProviderError || EmailProvidererror) {
    errorElement = (
      <p className="text-danger">
        {GoogleProviderError?.message || EmailProvidererror.message}
      </p>
    );
  }
  return (
    <div>
      <ToastContainer />
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Register</h1>
        {errorElement}
        <form onSubmit={handelRegister}>
          {/* <!-- name input --> */}
          <div className="form-outline mb-4">
            <input
              required
              type="text"
              id="name"
              name="naem"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              required
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input
              required
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Register
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Have an account ? <Link to="/login">Login</Link>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={handelGoogleSignin}
            >
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

export default Register;
