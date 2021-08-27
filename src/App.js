import React from 'react';
import './App.css';

import Input from './components/Input'
import TodoItem from './components/TodoItem';


// import to display state
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector(state => state.todoReducer.todoList )


  return (
    <div className="app">
      <div className="app__container">
        <Input />
        <div className="app__todoContainer">
          {todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
