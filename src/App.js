import React from 'react';
import Counter from './components/Counter.jsx';
import Post from './components/Post.jsx';
import './styles/App.css';

function App() {

    return (
        <div className="App">

            <Counter/>
            <Post post={
                {
                    id: 1,
                    title: 'JavaScript',
                    body: 'Description about JS.'
                }
            }/>
            <Post post={
                {
                    id: 2,
                    title: 'Python',
                    body: 'Description about Py.'
                }
            }/>
            <Post post={
                {
                    id: 3,
                    title: 'Go',
                    body: 'Description about Go.'
                }
            }/>
            <Post post={
                {
                    id: 4,
                    title: 'Dart',
                    body: 'Description about Dart.'
                }
            }/>
            <Post post={
                {
                    id: 6,
                    title: 'Rust',
                    body: 'Description about Rust.'
                }
            }/>
        </div>
    );
}

export default App;
