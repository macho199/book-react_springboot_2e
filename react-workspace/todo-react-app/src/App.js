import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React, { useState } from 'react';

function App() {
  const [items, setItem] = useState([
    {
      id: "0",
      title: "Hello World 1",
      done: true
    },
    {
      id: "0",
      title: "Hello World 2",
      done: false
    }
  ]);

  let todoItems = items.length > 0 && items.map((item) => <Todo item={item} key={item.id} />);

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
