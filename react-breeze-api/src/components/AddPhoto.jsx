import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const AddPhoto = () => {
    const [file, setFile] = useState(null);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        loadPhotos();
    }, []);

    const loadPhotos = async () => {
        try {
            const response = await api.get('/api/photos');
            console.log('Photos loaded:', response.data); // Ajout pour le débogage
            setPhotos(response.data);
        } catch (error) {
            console.error('Error loading photos:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('url', file);
        try {
            await api.post('/api/photos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFile(null);
            alert('Photo added successfully');
            // Après l'ajout, recharger la liste des photos
            loadPhotos();
        } catch (error) {
            console.error('Error adding photo:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='container mx-auto'>
                <input type="file" onChange={handleFileChange} required className='border' />
                <button type="submit">Add Photo</button>
            </form>
            <div className="photos-container">
                {photos && photos.map((photo, index) => (
                    <img key={index} src={photo.url} alt={`Photo ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default AddPhoto;
