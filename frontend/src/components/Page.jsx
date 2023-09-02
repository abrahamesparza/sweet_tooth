/* eslint-disable react/prop-types */
import { useState } from "react";

import Explore from "./Explore";
import Landing from "./Landing";
import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm';

function Form({ showPage }) {

    return (
        <>
            {showPage === 'login' ? (
                <LoginForm />
            ) : showPage === 'signup' ? (
                <SignUpForm />
            ) : showPage === 'explore' ? (
                <Explore />
            ) : (
                <Landing />
            )}
        </>
    )
}

export default Form;