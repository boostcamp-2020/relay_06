import React, { useState } from 'react';
import axios from '../plugin/axios';
import TagList from './TagList';

function PostEdit() {
  // const [postData, setPostData] = useState({title: null, content: null});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagArr, setTagArr] = useState([]);
  const onClick = (e) => {
    axios({
      url: `/api/diary`,
      method: 'post',
      data: {
        title: title,
        content: content
      }
    });
  };
  const onSetTags = () => {
    axios({
      url: `/api/nlp`,
      method: 'post',
      data: {
        content: content
      }
    }).then((response) => {
      const arr = [];
      const tags = JSON.parse(response.data);
      for (const tag of Object.keys(tags)) {
        arr.push(tags[tag]);
      }
      setTagArr(arr);
    });
  };

  return (
    <form className="container mt-5">
      <div className="row">
        <div className="col-4">
          태그내용
          <TagList tags={tagArr} />
          추천태그
          <br />
          <button type="button" onClick={onSetTags} className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> 추천태그 불러오기
          </button>
        </div>
        <div className="col-8">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">글 제목</label>
            <input
              type="title"
              className="form-control"
              id="title"
              placeholder="제목을 입력하세요"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">내용</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="15"
              placeholder="내용을 입력하세요"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <button onClick={(e) => onClick(e)} className="btn btn-primary">
                작성하기
              </button>
            </div>
            <div>
              <button className="btn btn-secondary">취소</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PostEdit;
