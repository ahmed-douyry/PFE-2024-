// src/components/AddPvNote.js

import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const AddPvNote = () => {
    const [moduleName, setModuleName] = useState('');
    const [moduleNumber, setModuleNumber] = useState('');
    const [file, setFile] = useState(null);
    const [pvNotes, setPvNotes] = useState([]);

    useEffect(() => {
        loadPvNotes();
    }, []);

    const loadPvNotes = async () => {
        try {
            const response = await api.get('/api/pv-notes');
            setPvNotes(response.data);
        } catch (error) {
            console.error('Error loading PV notes:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('module_name', moduleName);
        formData.append('module_number', moduleNumber);
        if (file) {
            formData.append('pdf', file);
        }

        try {
            await api.post('/api/pv-notes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setModuleName('');
            setModuleNumber('');
            setFile(null);
            alert('PV Note added successfully');
            loadPvNotes();
        } catch (error) {
            console.error('Error adding PV note:', error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDelete = async (pvNoteId) => {
        try {
            await api.delete(`/api/pv-notes/${pvNoteId}`);
            alert('PV Note deleted successfully');
            loadPvNotes();
        } catch (error) {
            console.error('Error deleting PV note:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Module Name</label>
                    <input
                        type="text"
                        value={moduleName}
                        onChange={(e) => setModuleName(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Module Number</label>
                    <input
                        type="text"
                        value={moduleNumber}
                        onChange={(e) => setModuleNumber(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Upload PDF</label>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} className="border p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Add PV Note
                </button>
            </form>
            <div className="pv-notes-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pvNotes &&
                    pvNotes.map((pvNote) => (
                        <div key={pvNote.id} className="relative group p-4 border border-gray-300 rounded-lg shadow-md">
                            <h2 className="text-lg font-bold mb-2">{pvNote.module_name}</h2>
                            <p className="mb-2">Module Number: {pvNote.module_number}</p>
                            {pvNote.pdf_url && (
                                <a
                                href={`http://localhost:8000${pvNote.pdf_url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline mb-2 block"
                                >
                                    View PDF
                                </a>
                            )}
                            <button
                                onClick={() => handleDelete(pvNote.id)}
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

export default AddPvNote;
