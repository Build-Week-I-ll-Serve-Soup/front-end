import React, {useState} from 'react';
import axios from 'axios';
import LoginForm from './Login';

function Post(props) {
    const loginApi = 'https://serve-soups.herokuapp.com/api/auth/login'


    const newLogin = (formValues, actions) => {
        debugger
        const details = {
            username: formValues.username,
            password: formValues.password
        };

        axios.post(loginApi, details)
            .then(res => {
                const loginDetails = res.data;
                actions.resetForm();
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <LoginForm onSubmit={newLogin}/>
        </div>
    );
}

export default Post;