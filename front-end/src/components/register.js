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
    const onSubmit = data => {
        // --- axios call here ---
    }




}