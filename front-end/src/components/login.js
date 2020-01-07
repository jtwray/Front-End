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
// function Login(props) => {
//     // --- UseState, for the username and password ---
//     // --- DEF: useState is a hook that allows you to have state variables in functional components ---
//     const [login, setLogin] = useState({
//         username: '',
//         password: ''
//     });
//     //------------------------------------------------

//     // --- handleChange watches for the changes made in the login and password fields ---
//     // --- DEF: handleChange whenever someone changes anything in the input area (add/delete) ---
//     const handleChangesLogin = e => {
//         setLogin({
//             ...login,
//             [e.target.id]: e.target.value
//         });
//         console.log(e.target.id);
//     };
//     //-----------------------------------------------

//     // ---submitForm
//     const submitForm = e => {
//         e.preventDefault();
//         props.addNewUser(user);
//         setLogin({ username: '', password: ''});
//     };
//     //-----------------------------------------------

//     // --- return statement ---
//     return (


//     )

// } 
// // --------------------------------------------------
// // --- Export the Login Function to App.js ---
// export default Login;

function Login () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <label>Username: </label>
            
    )


}