import React,{useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = function(props){
    // состояние post управляемое компонентом MyInput -> onChange
    const [post, setPost] = useState({title:'', body:''});
    // обработчик нажатия кнопки MyButton -> onClick
    const addNewPost = (event) => {
        event.preventDefault(); // отменить поведение по умолчанию
        const newPost={...post,id:Date.now()};
        props.create(newPost);
        setPost({title:'',body:''});// обнуление объекта post
    }
    return(
        <form>
                <MyInput value={post.title}
                    onChange={
                        (event) => {
                            setPost({...post, title:event.target.value}); // установить поле title
                        }
                    }
                    type="text"
                    placeholder='Название поста'/>


                <MyInput value={post.body}
                    onChange={
                        (event) => {
                            setPost({...post,body:event.target.value}); // установить поле body
                        }
                    }
                    type="text"
                    placeholder='Описание поста'/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
}

export default PostForm
