import React from "react";
import { NavLink } from "react-router-dom";

export default function BeforeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img
            width="50px"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/1979/LINEStorePC/main.png;compress=true"
          />
          라떼월드
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/signUp" className="nav-link">
                회원가입
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
