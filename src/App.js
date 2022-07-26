import React, {useState} from 'react';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
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
          <form>
            <input type="text" placeholder='Название поста'/>
            <input type="text" placeholder='Описание поста'/>
            <MyButton>Создать пост</MyButton>
          </form>
            <PostsList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
