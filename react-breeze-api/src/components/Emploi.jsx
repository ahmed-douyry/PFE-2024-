import React, { useEffect, useState } from 'react';
import api from '../api/axios';

export default function Emploi() {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    setFilteredGroups(
      groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, groups]);

  const loadGroups = async () => {
    try {
      const response = await api.get('/api/groups');
      setGroups(response.data);
    } catch (error) {
      console.error('Error loading groups:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/groups/${id}`);
      alert('Group deleted!');
      loadGroups();
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  };

  return (
    <>
     <div className='flex justify-between items-center'>
  <h1 className="text-2xl tracking-widest uppercase opacity-4 font-bold text-gray-800 mb-4 p-14 flex-grow">
    Emploi de temps
    <hr />
  </h1>
  <div className="mb-4 p-4 flex items-center">
    <input
      type="text"
      placeholder="Rechercher un groupe..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded"
    />
    <button
      onClick={() => setFilteredGroups(groups.filter(group => group.name.toLowerCase().includes(searchTerm.toLowerCase())))}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
    >
      Rechercher
    </button>
  </div>
</div>
      
      <div className="groups-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredGroups && filteredGroups.map((group) => (
          <div key={group.id} className="relative group p-4 border border-gray-300 rounded-lg shadow-md">
            <h1 className="text-3xl text-center font-bold mb-2">{group.name}</h1>
            {group.pdf_url && (
              <a
                href={`http://localhost:8000${group.pdf_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 block text-center"
              >
                voir PDF
              </a>
            )}
            <button
              onClick={() => handleDelete(group.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              &#x2716;
            </button>
          </div>
        ))}
      </div>
    </>
  );
}