// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
   <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm/>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;