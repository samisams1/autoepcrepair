// src/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';
import categoryReducer from './categoriesReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  category:categoryReducer,
  todo: todoReducer,
  login: loginReducer,
  registration: registrationReducer,
});

export default rootReducer;