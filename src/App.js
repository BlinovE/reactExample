import React, {useState} from 'react';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
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
            <MyInput type="text" placeholder='Название поста'/>
            <MyInput type="text" placeholder='Описание поста'/>
            <MyButton disabled>Создать пост</MyButton>
          </form>
            <PostsList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
