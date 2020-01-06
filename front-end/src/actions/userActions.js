import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAIL = "FETCH_USER_FAIL"

export const FETCH_REGISTER_USER_SUCCESS = 'FETCH_REGISTER_USER_SUCCESS'

export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"


export const DELETE_USER = "DELETE_USER"
export const DELETE_USER_FAIL = "DELETE_USER_FAIL" 


// NEED TO ADD ENDPOINTS

////////////////  POST LOGIN and REGISTER USER/////////////////////////////
////Used in REGISTER and SIGNIN form

export const loginUser = (login) => dispatch => {
    axiosWithAuth()
    .post('...', login)
    .then(res => {
        localStorage.setItem('token', res.data);
        props.history.push('/');
      })
      .catch(err => console.log(err));
}

export const registerUser = () => dispatch => {
    axios
    .post('...')
    .then(response => {
      dispatch({
      type: FETCH_REGISTER_USER_SUCCESS,
      payload: response.data
      });
  })
      .catch(err => console.log(err));
}

////////////////////////////////////////////////////////
//////////////// FETCH USER /////////////////////////////
////////////////////////////////////////////////////////

export const fetchUser = id => dispatch => {
    dispatch({type: FETCH_USER});
    axiosWithAuth()
        .get(`.../${id}`)
        .then(response => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        });
        })

        .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_USER_FAIL,
            payload: error.response
            
            });
        });
    };

////////////////////////////////////////////////////////
//////////////// EDIT USER /////////////////////////////
////////////////////////////////////////////////////////

export const editUser = (user, id) => dispatch => {
console.log(user, 'USER DATA')
    axiosWithAuth()
        .put(`.../${id}`, user)
        .then(response => {
        dispatch({
            type: UPDATE_USER, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response
        });
    });
    };

/////////////////////////////////////////////////////////
/////////////// DELETE USER   ///////////////////////////
////////////////////////////////////////////////////////

export const deleteUser = id => dispatch => {
    return axiosWithAuth()
        .delete(`.../${id}`)
        .then(response => {
            console.log(response)
            localStorage.removeItem('token');
              
        dispatch({
            type: DELETE_USER, 
            payload: response.data
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response
        });
    });
}