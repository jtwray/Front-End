import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_REVIEW = "FETCH_REVIEW"
export const FETCH_REVIEW_SUCCESS = "FETCH_REVIEW_SUCCESS"
export const FETCH_REVIEW_FAIL = "FETCH_REVIEW_FAIL"

export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const UPDATE_REVIEW_FAIL = "UPDATE_REVIEW_FAIL"

export const DELETE_REVIEW = "DELETE_REVIEW"
export const DELETE_REVIEW_FAIL = "DELETE_REVIEW_FAIL" 




// NEED TO ADD ENDPOINTS


///////// CREATE A REVIEW 

export const createReview = (review) => dispatch => {
    axiosWithAuth()
    .post('...', review)
    .then(res => {
        localStorage.setItem('token', res.data);
        //props.history.push('/');
      })
      .catch(err => console.log(err));
}



////////////////////////////////////////////////////////
//////////////// FETCH REVIEW /////////////////////////////
////////////////////////////////////////////////////////

export const fetchReview = id => dispatch => {
    dispatch({type: FETCH_REVIEW});
    axiosWithAuth()
        .get(`.../${id}`)
        .then(response => {
        dispatch({
            type: FETCH_REVIEW_SUCCESS,
            payload: response.data
        });
        })

        .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_REVIEW_FAIL,
            payload: error.response
            
            });
        });
    };

////////////////////////////////////////////////////////
//////////////// EDIT REVIEW /////////////////////////////
////////////////////////////////////////////////////////

export const editReview = (user, id) => dispatch => {
console.log(user, 'REVIEW DATA')
    axiosWithAuth()
        .put(`.../${id}`, user)
        .then(response => {
        dispatch({
            type: UPDATE_REVIEW, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_REVIEW_FAIL,
        payload: error.response
        });
    });
    };

/////////////////////////////////////////////////////////
/////////////// DELETE REVIEW  ///////////////////////////
////////////////////////////////////////////////////////

export const deleteReview = id => dispatch => {
    return axiosWithAuth()
        .delete(`.../${id}`)
        .then(response => {
            console.log(response)
            localStorage.removeItem('token');
              
        dispatch({
            type: DELETE_REVIEW, 
            payload: response.data
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response
        });
    });
}