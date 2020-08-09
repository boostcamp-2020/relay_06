import React from "react";

function TagList({ tags }) {
  const tagArr = tags.map((tag) => <li class="badge badge-info">${tag}</li>);
  return <ul>{!tagArr.length ? "아직 tag가 없습니다." : tagArr}</ul>;
}

export default TagList;
