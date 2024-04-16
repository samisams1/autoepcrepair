// registrationReducer.ts

export interface RegistrationState {
    isRegistered: boolean;
  }
  
  const initialState: RegistrationState = {
    isRegistered: false,
  };
  
  const registrationReducer = (state: RegistrationState = initialState, action: any): RegistrationState => {
    switch (action.type) {
      case 'REGISTRATION_SUCCESS':
        return { ...state, isRegistered: true };
      default:
        return state;
    }
  };
  
  export default registrationReducer;