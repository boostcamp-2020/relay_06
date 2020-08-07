import React from 'react';

function Navbar() {
  return (
    <div> 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <a class="navbar-brand" href="#">
            <img  width='50px'  src="https://stickershop.line-scdn.net/stickershop/v1/product/1979/LINEStorePC/main.png;compress=true" />
            라떼월드
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>홈</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">다이어리<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">프로필</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">사진첩</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
