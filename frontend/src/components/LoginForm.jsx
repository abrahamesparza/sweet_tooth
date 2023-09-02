/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from "react";

function LoginForm({ switchForm }) {
    const [userData, setUserData] = useState({
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
            const response = await axios.post('/loginUser', userData);
            console.log('response:', response.data)
        } catch (error) {
            console.error('Error creating user:', error)
        }

        setUserData({
            'email': '',
            'password': ''
        })
    }

    return (
        <>
            <div className="signUpFormContainer">
                <form onSubmit={handleSubmit}>
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
                    <p className="loginText">New user? <a href="" onClick={switchForm}>Sign Up</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;