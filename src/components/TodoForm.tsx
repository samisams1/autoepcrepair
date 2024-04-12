import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { AppState } from '../types';

interface AddTodoFormProps extends PropsFromRedux {}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo({
      id: new Date().getTime(),
      text,
    });
    setText('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = (state: AppState) => {
  return {};
};

const connector = connect(mapStateToProps, { addTodo });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AddTodoForm);