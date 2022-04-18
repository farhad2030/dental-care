import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";

const TopNavbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className=" fixed-top navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dental-Care
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/home#services"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="aboutMe">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Link
                  className="nav-link"
                  to="#!"
                  onClick={() => signOut(auth)}
                >
                  Signout
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
