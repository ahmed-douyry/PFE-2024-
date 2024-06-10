import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function ParentCard() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await api.get('/api/announcements');
                setAnnouncements(response.data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center flex-wrap'>
            {announcements.map((announcement) => (
                <div key={announcement.id} className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6'>
                    <img src={`http://localhost:8000${announcement.image_url}`} alt="Not found!" className='w-full h-48 object-cover' />
                    <div className='p-6'>
                        <h2 className='font-semibold text-xl mb-2'>{announcement.title}</h2>
                        <p className='text-gray-700 text-sm mt-2'>{announcement.description}</p>
                        <Link to={`/details/${announcement.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 w-72 ml-6 block'>
                            View More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
