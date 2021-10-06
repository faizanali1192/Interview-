import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar  ">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="space-between  ma-3">
            <button type="button" className="btn btn-outline-light m-1 btn-sm">
              Login
            </button>
            <button type="button" className="btn btn-outline-light m-1 btn-sm">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
