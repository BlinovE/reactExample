import React from 'react';
import Post from './Post';

const PostsList = function ({posts,title}) {
    
    return (
        <div>
            <h1>{title}</h1>
            {
            posts.map((post, index) => <Post number={index+1} post={post}
                key={
                    post.id
                }/>)
        } </div>

    );
}
export default PostsList;
