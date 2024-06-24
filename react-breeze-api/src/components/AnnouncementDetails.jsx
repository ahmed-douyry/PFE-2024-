import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function AnnouncementDetails() {
    const { id } = useParams();
    const [announcement, setAnnouncement] = useState(null);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await api.get(`/api/announcements/${id}`);
                setAnnouncement(response.data);
            } catch (error) {
                console.error('Error fetching announcement:', error);
            }
        };
        fetchAnnouncement();
    }, [id]);

    const generatePDF = () => {
        if (!announcement) return;
        const doc = new jsPDF();
        doc.setFontSize(12);
        doc.text(`Title: ${announcement.title}`, 10, 10);
        
        const descriptionLines = doc.splitTextToSize(`Description: ${announcement.description}`, 180);
        doc.text(descriptionLines, 10, 20);

        if (announcement.image_url) {
            const base64data = announcement.image_url;
            doc.addImage(base64data, 'JPEG', 10, 30, 180, 160);
        } else {
            console.error('Image data not available');
        }
        doc.save('announcement-details.pdf');
    };

    const placeholderImage = 'https://images.unsplash.com/photo-1718002127392-92a7eef514ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8';
    const placeholderDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae officiis dolor temporibus sunt maxime a facilis consequatur cumque reprehenderit sed maiores deleniti hic, molestiae in mollitia. Neque, deserunt corporis.";

    if (!announcement) return <div>Loading...</div>;

    return (
        <>
        <div className="container-fluid mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className='text-3xl font-bold text-center mb-6'>Détails Annonce</h1>
            <h2 className='text-2xl font-semibold text-center mb-8'>{announcement.title || 'Titre'}</h2>
            <div className='row'>
                <div className='col-md-3 d-flex flex-column p-3 justify-content-center'>
                    <div className="pb-3 mb-3 border-bottom d-flex flex">
                        <h6>Categories</h6>
                    </div>
                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Activities</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Announcements</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Avis aux étudiants</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Cérimonie</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Clubs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Concours</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Conventions</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Félicitations</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Journée d'étude</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Uncategorized</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-gray-500">Visites</a></li>
                    </ul>
                    
                </div>
                <div className='col-md-9 d-flex justify-content-center'>
                    <img src={announcement.image_url ? `http://localhost:8000${announcement.image_url}` : placeholderImage} alt="Image non trouvée" className='img-fluid rounded-lg shadow-md'/>
                </div>
                
            </div>
            <div className='col-md-12 d-flex flex-column justify-content-between mt-5' >
                    <div>
                        <h5 className='text-xl font-medium mb-2'>Description</h5>
                        <p className='text-gray-700 leading-relaxed'> {announcement.description || placeholderDescription} </p>
                    </div>
                    <button onClick={generatePDF} className='mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center'>
                        Télécharger PDF
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21h10a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-2-3h-4l-2 3H7a2 2 0 00-2 2v5a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>
            
        </div>
        
        </>
    );
}