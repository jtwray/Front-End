import React from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


//--- Styled Components ---

//-------------------------


// // --- Login Page Function ---
export default function Login() {
// --- useForm ---
    const { register, handleSubmit, errors } = useForm();

// --- onSubmit ---
    // const onSubmit = data => {
    //     console.log(data)
    // --- Axios Call ---
    //     axios()
    //     .post ()
    // }
    //     .then(res => {
    //         console.log('success', res);
    //     })
    //     .catch( err =>
    //         console.log(err.response)
    //         );
    // --- End of onSubmit ---
    // --- End of Axios Call ---

    // --- Return Statement ---
    return (
    // --- Div container ---
        <div className="login-container">
            <div className="header">Login</div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* --- Form --- */}
        <form>
        {/* --- Username Field --- */}
            {/* --- label --- */}
            <label htmlFor="username">
                {/* <span> Are you a new user? <Link tag={Link} to="/signup"> Sign up </Link></span> */}
                Username: 
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 6, maxLength: 15})} />
            </label>

            {/* --- errors --- */}
            {errors.username && errors.username.type === "required" && (
                <span> Username is required </span>
                )}
            {errors.username && errors.username.type === "minLength" && (
                <span> Username is too short </span>
                )}
            {errors.username && errors.username.type === "maxLength" && (
                <span> Username is too long </span>
                )}
        {/* --- End of Username Field--- */}
            
        {/* --- Password Field --- */}
            {/* --- label --- */}
            <label htmlFor="password">
                Password: 
            </label>
            <input
                type="password"
                placeholder="Password"
                name="password"
                ref={ register ({ required: true, minLength: 8})} />
            
            {/* --- errors --- */}
            {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
                )}
            {errors.password && errors.password.type === "minLength" && (
                <span> Password is too short - 8 characters</span>
                )}
        {/* --- End of Password Field --- */}

        {/* --- Submit Button --- */}
                <button className="button">Let's Eat!</button>
        {/*  --- End of Submit Button --- */}
        {/* --- End of Form --- */}
            </form>
    {/* --- End of Login container --- */}
            </div>
    )
}