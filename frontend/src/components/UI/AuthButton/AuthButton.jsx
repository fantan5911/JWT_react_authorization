import React from 'react';
import cl from './AuthButton.module.css';

const AuthButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={cl.btn}>
                {children}
            </button>
        </div>
    );
};

export default AuthButton;