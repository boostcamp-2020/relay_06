import React from "react";
import Navbar from "../components/Navbar";
import './GalleryPhotoPage.css'; 
import { Image, Jumbotron } from "react-bootstrap";

    /* src= "image.png" 에 이미지 링크 추가하면 될 것 같음 */
function GalleryPhotoPage({_tags, _imageUrl, _time}) {
    // const tags = _tags;
    // const imageUrl = _imageUrl;
    // const time = _time;
    
    // test data 
    let tags = ["집", "개", "고양이"];
    let imageUrl = "../logo512.png"
    let time = "2020-08-14 12:30";
    return (
        <>
            <Navbar/>
            <Jumbotron>
                <div class="btn-group-lg" role="group" aria-label="..."> 
                    {tags.map(element => <button type="button" class="btn btn=default"> {element} </button>)}
                </div>
                <p> {time} </p>
                <div class="text-center">
                    <Image class="img-responsive center-block" src = {imageUrl} fluid/> 
                </div>
            </Jumbotron>
        </>
    );
}


export default GalleryPhotoPage;