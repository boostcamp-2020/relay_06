import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "react-photo-gallery";
import {photos} from '../temp/photos.js'



function GalleryPage() {
    return (
        <>
            <Navbar/>
            <h1>갤러리페이지입니다.</h1>
            <Gallery photos={photos} />
        </>
    );
}

export default GalleryPage;
