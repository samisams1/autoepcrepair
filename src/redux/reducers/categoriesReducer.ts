// categoriesReducer.ts
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
  } from  '../actions/categoriesActions';
  
  interface Category {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface CategoriesState {
    loading: boolean;
    data: Category[];
    error: string | null;
  }
  
  const initialState: CategoriesState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const categoriesReducer = (
    state = initialState,
    action: { type: string; payload: any }
  ): CategoriesState => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_CATEGORIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoriesReducer;