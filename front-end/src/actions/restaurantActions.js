import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_RESTAURANT = "FETCH_RESTAURANT"
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS"
export const FETCH_RESTAURANT_FAIL = "FETCH_RESTAURANT_FAIL"

export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT"
export const UPDATE_RESTAURANT_FAIL = "UPDATE_RESTAURANT_FAIL"

export const DELETE_RESTAURANT = "DELETE_RESTAURANT"
export const DELETE_RESTAURANT_FAIL = "DELETE_RESTAURANT_FAIL" 




// NEED TO ADD ENDPOINTS


///////// CREATE A RESTAURANT

export const createRestaurant = (Restaurant) => dispatch => {
    axiosWithAuth()
    .post('/restaurants/add', Restaurant)
    .then(res => {
        localStorage.setItem('token', res.data);
        //props.history.push('/');
      })
      .catch(err => console.log(err));
}


////////////////////////////////////////////////////////
//////////////// FETCH RESTAURANT /////////////////////////////
////////////////////////////////////////////////////////

export const fetchRestaurant = id => dispatch => {
    dispatch({type: FETCH_RESTAURANT});
    axiosWithAuth()
        //.get(`/restaurants/${id}`)
        .get(`/restaurants`)
        .then(response => {
        dispatch({
            type: FETCH_RESTAURANT_SUCCESS,
            payload: response.data
        });
        })

        .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_RESTAURANT_FAIL,
            payload: error.response
            
            });
        });
    };

////////////////////////////////////////////////////////
//////////////// EDIT RESTAURANT /////////////////////////////
////////////////////////////////////////////////////////

export const editRestaurant = (user, id) => dispatch => {
console.log(user, 'RESTAURANT DATA')
    axiosWithAuth()
        .put(`/restaurants/${id}`, user)
        .then(response => {
        dispatch({
            type: UPDATE_RESTAURANT, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_RESTAURANT_FAIL,
        payload: error.response
        });
    });
    };

/////////////////////////////////////////////////////////
/////////////// DELETE USER   ///////////////////////////
////////////////////////////////////////////////////////

export const deleteRestaurant = id => dispatch => {
    return axiosWithAuth()
        .delete(`/restaurants/${id}`)
        .then(response => {
            console.log(response)
            localStorage.removeItem('token');
              
        dispatch({
            type: DELETE_RESTAURANT, 
            payload: response.data
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_RESTAURANT_FAIL,
        payload: error.response
        });
    });
}