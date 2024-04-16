// loginActions.ts

import { Dispatch } from 'redux';

interface LoginRequestAction {
  type: 'LOGIN_REQUEST';
}

interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: {
    username: string;
  };
}

interface LoginFailureAction {
  type: 'LOGIN_FAILURE';
}

type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    // Perform login logic, such as making API requests
    // Replace the setTimeout with your actual API call

    setTimeout(() => {
      // Simulate a successful login
      const loggedInUser = { username }; // Replace with your actual response data

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          username: loggedInUser.username,
        },
      });
    }, 2000);
  };
};