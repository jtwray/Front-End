import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

//--- Styled Components ---
// const RegBG = styled.div`
// `;

//-------------------------

export default function RegistrationForm() {

// --- useForm ---
    const { register, handleSubmit, errors } = useForm();
// ---------------

// --- onSubmit ---
    // const onSubmit = data => {
    //     // --- axios call here ---

    // }


    // --- Return Statement ---
    return (
    // --- Div container ---
        <div className="registration-container">
            <div className="header">Register</div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}

    {/* --- Form --- */}
        <form>

        {/* --- Username Field --- */}
            {/* --- label --- */}
            <label htmlFor="username">
                {/* <span> Do you already have an account? <Link tag={Link} to="/login"> Sign in </Link></span> */}
                Username: 
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 6, maxLength: 15})} />
            </label>
            {/* --- end of label --- */}

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
            {/* --- end of errors --- */}
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

        {/* --- Location Field --- */}
            {/* --- label --- */}
            <label htmlFor="location">
                Location: 
            </label>
            <input
                type="text"
                placeholder="Location"
                name="location"
                ref={ register ({ required: true})} />

            {/* --- errors --- */}
            {errors.location && errors.location.type === "required" && (
                <span>Location is required</span>
                )}
        {/* --- End of Location Field --- */}

        {/* --- Submit Button --- */}
                <button className="button">Let's Eat!</button>
        {/*  --- End of Submit Button --- */}

        {/* --- Email Field --- */}
            {/* --- label --- */}
            <label htmlFor="email">
                Email: 
            </label>
            <input
                type="email"
                placeholder="Email"
                name="email"
                ref={ register ({ required: true})} />

            {/* --- errors --- */}
            {errors.email && errors.email.type === "required" && (
                <span>Email is required</span>
                )}
        {/* --- End of Email Field --- */}

    {/* --- End of Form --- */}
        </form>

    {/* --- End of Login container --- */}
            </div>
    )
}