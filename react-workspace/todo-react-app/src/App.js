import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';
import React, { useEffect, useState } from 'react';
import { Container, List, Paper } from '@mui/material';
import { call } from './ApiService';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    call("/todo", "POST", item)
      .then((response) => setItems(response.data));
    console.log("items : ", items);
  };

  const deleteItem = (item) => {
    const newItems = items.filter(e => e.id != item.id);
    call("/todo", "DELETE", item)
      .then((response) => setItems(response.data));
    //setItems([...newItems]);
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
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
