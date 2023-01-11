import React, { useContext, useEffect, useState } from "react";
import logo from "../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { noteContext } from "../App";

function Navbar() {
  let user: any = useContext(noteContext);
  let navigate = useNavigate();
  const [login, setLogin] = useState("");

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("username") as any);
    if (users === null) {
      setLogin("Not Login");
    } else {
      setLogin(users[0].username);
    }
  }, [login]);
  const cartHandler = (e: any) => {
    e.preventDefault();
    // When new user try to open cart page then user have to firstly
    // Create accout(Signup) after user can go on CART page
    let users = JSON.parse(localStorage.getItem("username") as any);
    if (users === null) {
      alert("Please Create Your Account !!!");
      navigate("/Signup");
    } else {
      navigate("/Cart");
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light border border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li>
                <div style={{ width: "100%" }} className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Products..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    style={{ background: "transparent", borderLeft: "none" }}
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <i
                      className="fas fa-search"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </span>
                </div>
              </li>
              <li
                style={{ fontSize: "20px" }}
                className="nav-item dropdown ms-3"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    style={{ color: "black" }}
                    className="fa fa-map-marker"
                  ></i>{" "}
                  <span style={{ color: "black" }}>Collect From Store</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      City Name
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                style={{ fontSize: "20px" }}
                className="nav-item dropdown ms-3"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-alt" style={{ color: "black" }}></i>{" "}
                  <span style={{ color: "black" }}>{login}</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Signin
                    </Link>
                    <Link className="dropdown-item" to="/signup">
                      New User ? Signup
                    </Link>
                  </li>
                </ul>
              </li>
              <li style={{ fontSize: "20px" }} className="nav-item ms-3">
                <button
                  style={{ background: "transparent", border: "none" }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={cartHandler}
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span> {user.data.length} Cart</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
