// loginReducer.ts

export interface LoginState {
    isLoggedIn: boolean;
    username: string | null;
  }
  
  const initialState: LoginState = {
    isLoggedIn: false,
    username: null,
  };
  
  const loginReducer = (state: LoginState = initialState, action: any): LoginState => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isLoggedIn: true, username: action.payload.username };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, username: null };
      default:
        return state;
    }
  };
  
  export default loginReducer;