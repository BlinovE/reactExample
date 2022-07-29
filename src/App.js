import React, { useState, useMemo } from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Description about JS.",
    },
    {
      id: 2,
      title: "Python",
      body: "Description about Python.",
    },
    {
      id: 3,
      title: "Dart",
      body: "Description about Dart.",
    },
  ]);
  const [filter,setFilter] = useState({sort: '', query: ''})

  // функция обратного вызова для создания нового объекта массива posts
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // функция удаления поста из массива posts
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  

  const sortedPosts = useMemo( // сортировка постов
    ()=>{
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }
        return posts;
    },[filter.sort, posts]
  )

  
  const sortedAndSearchedPosts = useMemo( // фильтрация постов
    ()=>{
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query,sortedPosts]
  )

  

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length ? ( // если список постов пуст вывести "Посты не найдены"
        <PostsList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
      ) : (
        <h1>Посты не найдены</h1>
      )}{" "}
    </div>
  );
}

export default App;
