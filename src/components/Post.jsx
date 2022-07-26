import React from 'react';

const Post = function(){
    return(
        <div className="post">
        <div className="post__content">
          <strong>1.JavaScript</strong>
          <div>
            JavaScript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    ); 
}

export default Post;