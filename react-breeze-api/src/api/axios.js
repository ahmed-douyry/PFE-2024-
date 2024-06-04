import axios from 'axios';

// Crée une instance axios avec des paramètres de configuration par défaut
const api = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true, // Permet d'envoyer les cookies avec chaque requête
});

// Intercepteur pour ajouter le token d'authentification à chaque requête sortante


export default api;
