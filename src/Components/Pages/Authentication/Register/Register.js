import React from "react";

import google from "../../../../Images/logo/google.png";
import facebook from "../../../../Images/logo/facebook.png";
import github from "../../../../Images/logo/github.png";

const Register = () => {
  return (
    <div>
      <div className="col col-md-4 mx-auto border p-3 my-3 rounded">
        <h1 className="my-4">Register</h1>
        <form>
          {/* <!-- name input --> */}
          <div class="form-outline mb-4">
            <input
              type="text"
              id="name"
              name="naem"
              class="form-control"
              placeholder="Enter your Email"
            />
          </div>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter your Email"
            />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" class="btn btn-primary btn-block mb-4">
            Register
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
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

export default Register;
