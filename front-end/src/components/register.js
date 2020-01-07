import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const RegistrationBG = styled.div`
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

function Register(props) => {
    // --- useState, for the username, password, location and email ---
    // --- useState is a hook that allows you to have state variables in functional components ---
    const [register, setRegister] = useState{(
        username: '',
        password: '',
        location: '',
        email: ''
    )};
    //----------------------------------------------------------------------------

    // --- handleChange watches for the changes made in the login and password fields ---
    // --- DEF: handleChange whenever someone changes anything in the input area (add/delete) ---
    const handleChangeRegistration = (e) => {
        e.persist();
        setRegister({
            ...register,
            [e.target.id]: e.target.value
        });
    };
}

export default Register;