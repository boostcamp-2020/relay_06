import React from 'react';

function TagList({tags}) {
    
  const tagArr = tags
    .map(tag => 
        (<li class="badge badge-info">${tag}</li>)
    )

  return (
    <ul>
        {tags.length || '아직 tag가 없습니다.'}
        {tags}
    </ul>
  );
}

export default TagList;


