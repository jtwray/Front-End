import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


//--- Styled Components ---
const LoginBG = styled.div`
padding-top: 3vh;
background: linear-gradient(90deg, rgba(61,96,152,1) 0%, rgba(0,212,255,1) 100%);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: #0c0d1f;
height: 97vh; 
display: flex;
justify-content: center;
align-items: center;
`;
//-------------------------


// // ---Login Page Function ---
function LoginForm() => {
    // --- UseState, for the username and password ---
    // --- DEF: useState is a hook that allows you to have state variables in functional components ---
    const { register, handleSubmit, errors } = useForm();

    // const onSubmit = data => {
    //     console.log(data)
    //     //axios call here
    //     axios()
    //     .post ()
    // }
    //     .then(res => {
    //         console.log('success', res);
    //     })
    //     .catch( err =>
    //         console.log(err.response)
    //         );

    return (
        <div className="login-container">
            <div className="header">Login</div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
            <div className="form-group">

            {/* --- Username field start --- */}
            <label htmlFor="username">
                Username: 
                <input type="text"
                name="username"
                placeholder="username"
                // add ref
                />
            </label>

            </div>
            </div>
            </form>
        </div>

    )

}