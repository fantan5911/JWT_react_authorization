import { useContext, useState } from 'react';
import { AuthContext } from './context/authContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({
    login: '',
    password: ''
  })

  return (
    <div>
      <AuthContext.Provider value={{
        user,
        setUser
      }}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App
