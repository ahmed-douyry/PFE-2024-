import axios from "axios";
import { Children, createContext, useContext, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext({});

export const Authprovider = ({ children }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const csrf = () => api.get('/sanctum/csrf-cookie');

  const getuser = async () => {
    const { data } = await api.get('/api/user');
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await api.post('/login', data);
      navigate('/');
    } catch (e) {
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
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      await api.post('/register', data);
      getuser();
      navigate('/');
    } catch (e) {
      if (e.response) {
        switch (e.response.status) {
          case 400:
            setError('Bad request. Please check your input and try again.');
            break;
          case 401:
            setError('Unauthorized. Please check your credentials and try again.');
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
    }
  };
  const logout=()=>{
    api.post('/logout').then(()=>{
      setUser(null)
      navigate('/login')
    })
  }

  return (
    <Authcontext.Provider value={{ user, error, getuser, login, register ,logout}}>
      {children}
    </Authcontext.Provider>
  );
};

export default function useAuthcontext() {
  return useContext(Authcontext);
}