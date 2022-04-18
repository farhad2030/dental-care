import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();
  if (loading) {
    return <div>Loading</div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <>
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h5 className="text-success"> Please Verify your email address</h5>
      </>
    );
  }
  return children;
};

export default RequireAuth;
