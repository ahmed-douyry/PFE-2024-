import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const AddGroup = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        loadGroups();
    }, []);

    const loadGroups = async () => {
        try {
            const response = await api.get('/api/groups');
            setGroups(response.data);
        } catch (error) {
            console.error('Error loading groups:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        if (file) {
            formData.append('pdf', file);
        }

        try {
            await api.post('/api/groups', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setName('');
            setFile(null);
            alert('Group added successfully');
            loadGroups();
        } catch (error) {
            console.error('Error adding group:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = async (groupId) => {
        try {
            await api.delete(`/api/groups/${groupId}`);
            alert('Group deleted successfully');
            loadGroups()
        } catch (error) {
            console.error('Error deleting group:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Group Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Upload PDF</label>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} className="border p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add Group</button>
            </form>
            <div className="groups-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groups && groups.map((group) => (
                    <div key={group.id} className="relative group p-4 border border-gray-300 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-2">{group.name}</h2>
                        {group.pdf_url && (
                            <a href={`http://localhost:8000${group.pdf_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-2 block">
                                View PDF
                            </a>
                        )}
                        <button
                            onClick={() => handleDelete(group.id)}
                            className="absolute top-2 right-2 bg-red-500  text-white p-1 rounded-full"
                        >
                            &#x2716;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddGroup;
