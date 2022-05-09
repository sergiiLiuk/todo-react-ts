import React, {FC} from 'react';
import {TodoList} from './components/TodoList'
 
import './App.css';

const App:FC= ()=> {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <TodoList/> 
    </div>
  );
}

export default App;
