// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const csrf = () => api.get('/sanctum/csrf-cookie');

  const getUser = async () => {
    const { data } = await api.get('/api/user');
    setUser(data);
  };

  const login = async (data) => {
    await csrf();
    try {
      await api.post('/login', data);
      getUser();
      navigate('/');
    } catch (e) {
      handleErrors(e);
    }
  };

  const register = async (data) => {
    await csrf();
    try {
      await api.post('/register', data);
      getUser();
      navigate('/');
    } catch (e) {
      handleErrors(e);
    }
  };

  const logout = async () => {
    await api.post('/logout');
    setUser(null);
    navigate('/login');
  };

  const handleErrors = (e) => {
    if (e.response) {
      switch (e.response.status) {
        case 400:
          setError('Bad request. Please check your input and try again.');
          break;
        case 401:
          setError('Invalid email or password. Please try again.');
          break;
        case 422:
          setError('Unprocessable Entity. Please check your input for errors.');
          break;
        case 500:
          setError('Internal server error. Please try again later.');
          break;
        default:
          setError(`An error occurred: ${e.response.statusText}`);
      }
    } else if (e.request) {
      setError('No response from the server. Please check your network connection and try again.');
    } else {
      setError('An error occurred while setting up the request. Please try again.');
    }
    console.log(e);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
