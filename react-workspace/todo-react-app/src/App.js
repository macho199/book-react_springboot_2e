import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';
import React, { useEffect, useState } from 'react';
import { Container, List, Paper } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      header: { "Content-Type": "application/json" }
    };

    fetch("http://localhost:8080/todo", requestOptions)
    .then((response) => response.json())
    .then(
      (response) => {
        setItems(response.data)
      },
      (error) => {

      }
    );
  }, []);

  const addItem = (item) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items : ", items);
  };

  const deleteItem = (item) => {
    const newItems = items.filter(e => e.id != item.id);
    setItems([...newItems]);
  };

  const editItem = () => {
    setItems([...items]);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        {todoItems}
      </Container>
    </div>
  );
}

export default App;
