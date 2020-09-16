import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/Dashboard">
        HumanTech
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="form-inline my-2 my-lg-0 ml-auto text-white">
          <i className="fa fa-user-circle mr-2" aria-hidden="true"></i>{" "}
          <span>Eduardo Lulichac</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
