import React from 'react';
import { connect } from 'react-redux';
import { Todo, removeTodo } from '../redux/actions/todoActions';
import { AppState } from '../types';

interface TodoListProps {
  todos: Todo[];
  removeTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { removeTodo })(TodoList);