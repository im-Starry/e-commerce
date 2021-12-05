import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3 shadow my-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between ">
      <div className="dropdown text-end">
        <a
          href="#"
          className="d-block link-dark text-decoration-none dropdown-toggle fw-bolder text-secondary ms-4"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ALL TYPES
        </a>
        <ul className="dropdown-menu text-small">
          <li>
            <a className="dropdown-item text-secondary" href="#">
              Two Pillow
            </a>
          </li>
          <li>
            <a className="dropdown-item text-secondary" href="#">
              Three Pillow
            </a>
          </li>
          <li>
            <a className="dropdown-item text-secondary" href="#">
              One Pillow
            </a>
          </li>
        </ul>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a
            href="#"
            className="nav-link px-2 active border-bottom border-primary border-2 fw-bold"
          >
            Popular Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-secondary fw-bold">
            Low Price
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-secondary fw-bold">
            High Price
          </a>
        </li>
      </ul>

      <div className="dropdown text-end">
        <a
          href="#"
          className="d-block link-dark text-decoration-none dropdown-toggle text-secondary fw-bolder me-4"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          PRICE
        </a>
        <ul className="dropdown-menu text-small">
          <li>
            <a className="dropdown-item text-secondary" href="#">
              Popular Products
            </a>
          </li>
          <li>
            <a className="dropdown-item text-secondary" href="#">
              Low Price
            </a>
          </li>
          <li>
            <a className="dropdown-item text-secondary" href="#">
              High Price
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
