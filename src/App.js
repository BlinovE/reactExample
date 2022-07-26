import React, {useState} from 'react';
import Post from './components/Post.jsx';
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

    return (
        <div className="App">
          <h1>Посты:</h1>
            {
            posts.map(post => <Post post={post}
                key={
                    post.id
                }/>)
        } </div>
    );
}

export default App;
