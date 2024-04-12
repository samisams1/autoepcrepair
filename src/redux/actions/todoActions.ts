// src/actions/todoActions.ts

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export interface Todo {
  id: number;
  text: string;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number; // ID of the todo to be removed
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;

export const addTodo = (todo: Todo): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (todoId: number): TodoActionTypes => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
};