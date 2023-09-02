/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from "react";
import '../styles/signUpForm.css'

function SignUpForm({ switchForm }) {
    const [userData, setUserData] = useState({
        'name': '',
        'email': '',
        'password': '',
    });

    function handleChange(event) {
        let { name, value } = event.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/newUser', userData);
            console.log('response:', response.data)
        } catch (error) {
            console.error('Error creating user:', error)
        }

        setUserData({
            'name': '',
            'email': '',
            'password': ''
        })
    }

    return (
        <>
            <div className="signUpFormContainer">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
                <div className='loginOption'>
                    <p className="loginText">Already have an account? <a href="" onClick={switchForm}>Log in</a></p>
                </div>
            </div>
        </>
    )
}

export default SignUpForm;