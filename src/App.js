import React, {useState} from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import './styles/App.css';
import MySelect from './components/UI/select/select';

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
    const createPost = (newPost) => {
        setPosts([
            ...posts,
            newPost
        ]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts= (sort)=>{
      setSelectedSort(sort);
      setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    }

    const [selectedSort, setSelectedSort] = useState('');

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0'}}/>
            <MySelect value={selectedSort} onChange={sortPosts} defaultValue="Сортировка" options={[
              {value:"title", name:"По названию"},
              {value:"body", name:"По опиcанию"}
            ]}/>
             {
            posts.length ? <PostsList remove={removePost}
                posts={posts}
                title="Список постов 1"/> : <h1>Посты не найдены</h1>
        } </div>
    );
}

export default App;
