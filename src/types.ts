// types.ts

import { TodoState } from './redux/reducers/todoReducer';

export interface AppState {
  todo: TodoState;
}