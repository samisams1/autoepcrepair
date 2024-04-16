import React from 'react';
import { connect } from 'react-redux';
import { Todo, removeTodo } from '../redux/actions/todoActions';
import { AppState } from '../types';
import Button from './Button/Button';

interface TodoListProps {
  todos: Todo[];
  removeTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  const  handleClick = ()=>{
    alert("samisas")
  }
  return (
    <div>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    <Button onClick={handleClick}>
  Click me
</Button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { removeTodo })(TodoList);