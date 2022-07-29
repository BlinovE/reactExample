import React, { useState } from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import MySelect from "./components/UI/select/select";
import MyInput from "./components/UI/input/MyInput";

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
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // функция обратного вызова для создания нового объекта массива posts
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // функция удфления поста из массива posts
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  //функция сортировки постов в массиве posts
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  function getSortedPosts() {
    console.log("SoRTED POST")
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }
  const sortedPosts = getSortedPosts();

  

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <MyInput  //поле фильтрации постов
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />

      <MySelect // поле сортировки
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По опиcанию" },
        ]}
      />

      {posts.length ? ( // если список постов пуст вывести "Посты не найдены"
        <PostsList
          remove={removePost}
          posts={sortedPosts}
          title="Список постов 1"
        />
      ) : (
        <h1>Посты не найдены</h1>
      )}{" "}
    </div>
  );
}

export default App;
