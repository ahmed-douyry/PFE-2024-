import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const AddAnnouncement = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        loadAnnouncements();
    }, []);

    const loadAnnouncements = async () => {
        try {
            const response = await api.get('/api/announcements');
            setAnnouncements(response.data);
        } catch (error) {
            console.error('Error loading announcements:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', file);

        try {
            await api.post('/api/announcements', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setTitle('');
            setDescription('');
            setFile(null);
            alert('Announcement added successfully');
            loadAnnouncements();
        } catch (error) {
            console.error('Error adding announcement:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = async (announcementId) => {
        try {
            await api.delete(`/api/announcements/${announcementId}`);
            alert('Announcement deleted successfully');
            loadAnnouncements();
        } catch (error) {
            console.error('Error deleting announcement:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <input type="file" onChange={handleFileChange} required className="border p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Add Announcement
                </button>
            </form>
            <div className="announcements-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {announcements && announcements.map((announcement) => (
                    <div key={announcement.id} className="relative group">
                        <img src={`http://localhost:8000${announcement.image_url}`} alt={`Announcement ${announcement.id}`} className="w-full h-auto rounded-lg shadow-md" />
                        <div className="p-4">
                            <h2 className="font-bold text-lg">{announcement.title}</h2>
                            <p className="text-gray-700 text-sm">{announcement.description}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(announcement.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            &#x2716;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddAnnouncement;
