import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";

const TopNavbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
          Dental-Care
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/home#services">
                services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="aboutMe">
                About Me
              </Link>
            </li>
            <li class="nav-item">
              {user ? (
                <Link class="nav-link" to="#!" onClick={() => signOut(auth)}>
                  Signout
                </Link>
              ) : (
                <Link class="nav-link" to="/login">
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
