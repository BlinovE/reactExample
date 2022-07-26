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
    // состояние title управляемое компонентом MyInput -> onChange
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // обработчик нажатия кнопки MyButton -> onClick
    const addNewPost = (event) => {
        event.preventDefault(); // отменить поведение по умолчанию
        const newPost={ // объект нового поста
          id: Date.now(),
          title,
          body
        }
        setPosts([...posts,newPost]);// добавление нового post в массив posts
    }
    return (
        <div className="App">
            <form>
                <MyInput value={title}
                    onChange={
                        (event) => {
                            setTitle(event.target.value); // установить поле title
                        }
                    }
                    type="text"
                    placeholder='Название поста'/>


                <MyInput value={body}
                    onChange={
                        (event) => {
                            setBody(event.target.value); // установить поле body
                        }
                    }
                    type="text"
                    placeholder='Описание поста'/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostsList posts={posts}
                title="Список постов 1"/>
        </div>
    );
}

export default App;
