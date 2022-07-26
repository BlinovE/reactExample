import React, {useState} from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'Description about JS.'
        }, {
            id: 2,
            title: 'Python',
            body: 'Description about Python.'
        }, {
            id: 3,
            title: 'Dart',
            body: 'Description about Dart.'
        }
    ])
    // функция обратного вызова для создания нового объекта массива posts
    const createPost = (newPost)=>{
      setPosts([...posts,newPost]);
    }

    const removePost = (post)=>{
      setPosts(posts.filter(p=>p.id !== post.id));
    }
    
    return (
        <div className="App">
            <PostForm create={createPost} />
            {
              posts.length?
              <PostsList remove={removePost} posts={posts}
                title="Список постов 1"/>:
                <h1>Посты не найдены</h1>
            }
            
        </div>
    );
}

export default App;
