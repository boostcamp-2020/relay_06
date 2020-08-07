import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TagList from './TagList';

function PostEdit() {
    // const [postData, setPostData] = useState({title: null, content: null});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tagArr, setTagArr] = useState([]);
    const onClick = () => {
        axios({
            baseURL: 'http://127.0.0.1:8000/',
            url: `api/diary/`,
            method: 'post',
            params: {
                title: title,
                content: content
            }
        }).then(response => {
            setTagArr(response.data.tagArr);
        })
    }

  return (
    <form class="container mt-5">
        <div class="row">
            <div class="col-4">
                태그내용
                <TagList tags={tagArr} /> 
                추천태그
                <br />
                <button type="button" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span> 추천태그 불러오기
                </button>
            </div>
            <div class="col-8">
                <div class="form-group">
                    <label for="exampleFormControlInput1">글 제목</label>
                    <input type="title" class="form-control" id="title" placeholder="제목을 입력하세요" onChange={
                        (e) => setTitle(e.target.value)
                    } />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">내용</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" placeholder="내용을 입력하세요" onChange={
                        (e) => setContent(e.target.value)
                    }></textarea>
                </div>
                <div class="d-flex justify-content-between">
                    <div>
                        <button onClick={onClick} class="btn btn-primary">작성하기</button>
                    </div>
                    <div>
                        <button class="btn btn-secondary">취소</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
  );
}

export default PostEdit;
