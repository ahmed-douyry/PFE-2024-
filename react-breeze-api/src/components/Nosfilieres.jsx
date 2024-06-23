import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';

const Filieres = () => {
    const history = useNavigate();

    const handleViewCourses = (filiere) => {
        // Redirige vers une page spécifique pour chaque filière
        history.push(`/courses/${filiere}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Nos Filières</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out bg-cover bg-center" style={{ backgroundImage: "url('/dev.png')" }}>
                    <div className="px-6 py-4 bg-white bg-opacity-75">
                        <div className="font-bold text-xl mb-2">Développement Digital</div>
                        <p className="text-gray-700 text-base">
                            Apprenez les compétences de développement web et mobile pour créer des solutions digitales innovantes.
                        </p>
                        <Link to={'/dev'}>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Voir les cours
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out bg-cover bg-center" style={{ backgroundImage: "url('/infra.png')" }}>
                    <div className="px-6 py-4 bg-white bg-opacity-75">
                        <div className="font-bold text-xl mb-2">Infrastructure Digitale</div>
                        <p className="text-gray-700 text-base">
                            Devenez un expert en réseaux et systèmes informatiques pour gérer des infrastructures digitales robustes.
                        </p>
                        <Link to={'/infra'}>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Voir les cours
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out bg-cover bg-center" style={{ backgroundImage: "url('/ge.png')" }}>
                    <div className="px-6 py-4 bg-white bg-opacity-75">
                        <div className="font-bold text-xl mb-2">Gestion des Entreprises</div>
                        <p className="text-gray-700 text-base">
                            Acquérez des compétences en management et en administration pour gérer efficacement des entreprises.
                        </p>
                        <Link to={'/ge'}>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Voir les cours
                        </button>
                    </Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out bg-cover bg-center" style={{ backgroundImage: "url('/images/assistant-administratif.jpg')" }}>
                    <div className="px-6 py-4 bg-white bg-opacity-75">
                        <div className="font-bold text-xl mb-2">Assistant Administratif</div>
                        <p className="text-gray-700 text-base">
                            Formez-vous aux tâches administratives pour soutenir les opérations quotidiennes des entreprises.
                        </p>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Voir les cours
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filieres;