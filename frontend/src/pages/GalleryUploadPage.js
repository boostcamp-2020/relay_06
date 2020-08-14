import React, { useState } from "react";
import axios, { post } from 'axios';

import Navbar from "../components/Navbar";
import { Container, Row, Image,Form, Button } from 'react-bootstrap'; 


function GalleryUploadPage() {

    const [file, setFile] = useState(0);
    const [url, setUrl] = useState("https://icon-library.net/images/upload-icon-png/upload-icon-png-28.jpg");

    const onChange = (e) => {
        if (!e.target.files[0]) {
            return;
        }
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
           
            setUrl(reader.result.toString());
            
        }

  
    }

    const onFormSubmit = (e) => {
        e.preventDefault(); // submit 멈추는 경우?
        fileUpload(file).then((response)=>{
          console.log(response.data);
        });
    }

    const fileUpload = (file) => {
        const host = ''; /// url 입력 필요
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        console.log(file);
        return post(host, formData,config);
      }

    return (
        <>
            <Navbar/>
            <Container className="justify-content-md-center">
                <br></br>
                <Row className="justify-content-md-center">
                    <Form onSubmit={onFormSubmit}>
                        <label for="upload">
                            <span style ={{'fontSize':'50px', 'fontWeight': 'bold'}}>choose file</span>
                            <Form.File id="upload" type="file" onChange={onChange} style ={{display:'none'}}/>
                        </label>
                        
                        
                    </Form>
                </Row>
                <br></br>
                <Row xs={3} md={2} className="justify-content-md-center">
                    <label for="upload">
                        <Image src={url} thumbnail />
                    </label>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Button type="submit">Upload</Button>
                </Row>
                
            </Container>
            
                        
        </>
    );
}



export default GalleryUploadPage;
