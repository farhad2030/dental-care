import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import auth from "../../../../firebase.init";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";

const Register = () => {
  const [error, setError] = useState("");
  const [signInWithGoogle, GoogleProvideruser, GoogleProviderError] =
    useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    EmailProvideruser,
    EmailProvidererror,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handelRegister = (event) => {
    event.preventDefault();

    var name = event.target.name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  const handelGoogleSignin = () => {
    signInWithGoogle();
  };
  console.log(GoogleProvideruser);
  console.log(EmailProvideruser);

  return (
    <div>
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Register</h1>
        <p className="text-denger">{error}</p>
        <form onSubmit={handelRegister}>
          {/* <!-- name input --> */}
          <div className="form-outline mb-4">
            <input
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

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Register
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
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
