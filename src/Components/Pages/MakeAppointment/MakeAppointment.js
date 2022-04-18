import React from "react";
import { Form, Button } from "react-bootstrap";

const MakeAppointment = () => {
  return (
    <div>
      <h1 className="p-4">
        <span className="text-info"> Make </span>an Appointment
      </h1>
      <div className="w-50 mx-auto text-start">
        <form>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              name="namel"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
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
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter your Description"
            />
          </div>
          <div className="form-outline mb-4 row">
            <div className="col-6">
              <input
                type="text"
                name="Phone"
                className="form-control"
                placeholder="Enter your phone"
              />
            </div>
            <div className="col-6">
              <input
                type="date"
                name="Phone"
                className="form-control"
                placeholder="Enter your phone"
              />
            </div>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col">{/* <!-- Simple link --> */}</div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sent Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;
