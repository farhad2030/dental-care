import React from "react";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";

const Login = () => {
  return (
    <div>
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Login</h1>
        <form>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              placeholder="Enter your Email"
            />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            <div class="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={google} alt="" />
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={facebook} alt="" />
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <img style={{ width: "30px" }} src={github} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
