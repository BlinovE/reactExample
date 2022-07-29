import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/select";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput //поле фильтрации постов
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..."
      />

      <MySelect // поле сортировки
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По опиcанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
