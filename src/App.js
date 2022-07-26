import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(5);
  const [value, setValue] = useState('Привет инпут');
  
  function inc(){
    setCount(count+1);
  }
  function dec(){
    setCount(count-1);
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(event)=>{
        setValue(event.target.value)
      }}/>
      <button onClick={ inc }>Increment</button>
      <button onClick={ dec }>Decrement</button>
    </div>
  );
}

export default App;
