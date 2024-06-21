import React, { useEffect, useState } from 'react'
import api from '../api/axios';

export default function Emploi() {
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
  return (
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
  )
}
