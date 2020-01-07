import {
    FETCH_REVIEW,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAIL,

    UPDATE_REVIEW,
    UPDATE_REVIEW_FAIL,

    DELETE_REVIEW,
    DELETE_REVIEW_FAIL,

  } from "../actions/reviewActions";
  
  const initialState = {
    review: {},
    //users: [],
    loading: false,
    reviewDeleted: false,
    error: null
    
  };
  
  export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REVIEW: 
            return {
                ...state,
                loading: true, 
                error: ''
            };

        case FETCH_REVIEW_SUCCESS: 
            return {
                ...state,
                review: action.payload,
                loading: false, 
                error: ''
            };
     
        case FETCH_REVIEW_FAIL: 
            return {
                ...state,
                error: action.payload
            };
/////////////////////////////////////////////

        case UPDATE_REVIEW:
            return {
                ...state,
                review: action.payload,
                loading: false, 
            }

        case UPDATE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

//////////////////////////////////////////////////////////////
//////////////// DELETE REVIEW  ////////////////////////////////
//////////////////////////////////////////////////////////////


            case DELETE_REVIEW: 
            return {
                ...state,
                review: action.payload,
                loading: false, 
                error: ''
            };

        case DELETE_REVIEW_FAIL: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }  
        }
    }