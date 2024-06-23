import React from 'react';
import { Link } from 'react-router-dom';

const ServicePedagogique = ({ frontContent, backContent }) => {
    return (
        <div className='container mx-auto p-4'>
            <div className="border-b-2 mb-4"></div>
            <div className='flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="flip-card ">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {frontContent}
                            <img src="https://www.fpl.ac.ma/site/wp-content/uploads/2019/02/logo-lwest-01.jpg" alt="Not Found" className='h-full w-full object-cover' />
                        </div>
                        <div className="flip-card-back flex justify-center items-center">
                            {backContent}
                            <Link to={'/emploi'} className="no-underline flex justify-center items-center w-full h-full">
                                <h5 className="text-center text-black font-bold">Emplois du temps</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {frontContent}
                            <img className='h-full w-full object-cover' src="https://www.fpl.ac.ma/site/wp-content/uploads/2019/02/amo-01.jpg" alt="Not Found" />
                        </div>
                        <div className="flip-card-back" style={{ backgroundColor: "#5aa1e3", padding: '40px' }}>
                            {backContent}
                            <h5 className='font-bold'>Inscription à l'AMO</h5>
                            <p>Afin de faciliter aux étudiants de l’Enseignement Supérieur des secteurs public et privé l’expression de leur demande d’inscription à l’Assurance Maladie de Base des Étudiants, nous avons conçu un formulaire électronique simple et d’accès facile via ce
                                <a href="https://www.cnops.org.ma/" className='no-underline text-orange-900 font-bold'><span> Site web.</span></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {frontContent}
                            <img className='h-full w-full object-cover' src="https://www.fpl.ac.ma/site/wp-content/uploads/2019/02/r%C3%A9sutats.jpg" alt="Not Found" />
                        </div>
                        <div className="flip-card-back" style={{ backgroundColor: "#ebebeb" }}>
                            {backContent}
                            <div className="flex flex-col justify-center items-center w-full h-full space-y-4">
                                <h5 className="text-center text-black font-bold text-xl">Consulter résultats</h5>
                                <h6 className="text-center text-gray-700 text-lg">Résultats des contrôles finaux :</h6>
                                <Link to={'/pvliste'} className="text-blue-500 hover:text-blue-700 underline">FPA</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicePedagogique;
