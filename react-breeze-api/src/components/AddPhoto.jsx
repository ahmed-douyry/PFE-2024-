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
            loadPhotos();
        } catch (error) {
            console.error('Error adding photo:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = async (photoId) => {
      try {
          await api.delete(`/api/photos/${photoId}`);
          alert('Photo deleted successfully');
          loadPhotos();
      } catch (error) {
          console.error('Error deleting photo:', error);
      }
  };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-4">
                    <input type="file" onChange={handleFileChange} required className="border p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add Photo</button>
            </form>
            <div className="photos-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos && photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                        <img src={photo.url} alt={`Photo ${photo.id}`} className="w-full h-auto rounded-lg shadow-md" />
                        <button
                            onClick={() => handleDelete(photo.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                            &#x2716;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddPhoto;
