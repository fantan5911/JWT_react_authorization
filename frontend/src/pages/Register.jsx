import React, {useContext} from 'react';
import AuthInput from "../components/UI/AuthInput/AuthInput.jsx";
import AuthButton from "../components/UI/AuthButton/AuthButton.jsx";
import {AuthContext} from "../context/AuthContext.js";
import AuthService from '../API/AuthService.js';

const Register = () => {
    const {user, setUser} = useContext(AuthContext);

    const registerUser = async () => {
        await AuthService.RegisterUser(user);
    }

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{marginBottom: 10}}>Страница регистрации</h1>
            <AuthInput
                type="text"
                placeholder="Введите логин"
                value={user.login}
                onChange={e => setUser({...user, login: e.target.value})}
            />
            <AuthInput
                type="password"
                placeholder="Введите пароль"
                value={user.password}
                onChange={e => setUser({...user, password: e.target.value})}
            />
            <AuthButton style={{
                padding: '2px 48px'

            }} onClick={registerUser}>Регистрация</AuthButton>
        </div>
    )
}

export default Register;