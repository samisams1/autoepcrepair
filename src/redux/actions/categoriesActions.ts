// categoriesActions.ts
import { Dispatch } from 'redux';
import axios from 'axios';

// Action Types
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';


// Action Creators
export const fetchCategories = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    axios
      .get('http://localhost:4000/category') // Replace with your API endpoint
      .then((response) => {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORIES_FAILURE,
          payload: error.message,
        });
      });
  };
};