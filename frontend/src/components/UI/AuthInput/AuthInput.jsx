import React from 'react';
import cl from './AuthInput.module.css';

const AuthInput = ({...props}) => {
    return (
        <div className={cl.inputDiv}>
            <input {...props}/>
        </div>
    );
};

export default AuthInput;