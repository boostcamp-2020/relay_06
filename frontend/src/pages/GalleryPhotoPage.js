


import React from "react";
import Navbar from "../components/Navbar";


function GalleryPhotoPage({match}) {
    const imageUrl = match.params.image;
    return (
        <>
            <Navbar/>
            <h1>갤러리포토페이지입니다.</h1>
            <h2>image 주소: {imageUrl}</h2>
        </>
    );
}

export default GalleryPhotoPage;
