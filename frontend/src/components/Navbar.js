import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            width="50px"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/1979/LINEStorePC/main.png;compress=true"
          />
          라떼월드
        </a>
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
              <a className="nav-link" href="#">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>홈
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">다이어리</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                프로필
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">사진첩</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
