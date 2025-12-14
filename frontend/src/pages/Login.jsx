import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import AuthInput from '../components/UI/AuthInput/AuthInput';

const Login = () => {
    const {user, setUser} = useContext(AuthContext);

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{marginBottom: 10}}>Страница входа</h1>
            <AuthInput type="text" placeholder="Введите логин"/>
            <AuthInput type="password" placeholder="Введите пароль"/>
        </div>
    );
};

export default Login;