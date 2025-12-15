import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import AuthInput from '../components/UI/AuthInput/AuthInput';
import AuthButton from "../components/UI/AuthButton/AuthButton.jsx";
import AuthService from "../API/AuthService.js";

const Login = () => {
    const {user, setUser} = useContext(AuthContext);

    const loginUser = async () => {
        await AuthService.LoginUser(user);
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
            <h1 style={{marginBottom: 10}}>Страница входа</h1>
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
            <AuthButton onClick={loginUser}>Вход</AuthButton>
        </div>
    );
};

export default Login;