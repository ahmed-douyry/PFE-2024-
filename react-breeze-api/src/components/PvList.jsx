import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const PvList = () => {
  const [pvNotes, setPvNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredPvNotes = pvNotes.filter((pvNote) =>
    pvNote.module_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">PV Notes</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPvNotes.map((pvNote) => (
          <div
            key={pvNote.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h1 className="text-2xl font-bold mb-2">Module name: {pvNote.module_name}</h1>
            <p className="mb-2">Module Number: {pvNote.module_number}</p>
            {pvNote.pdf_url && (
              <div>
                <a
                  href={`http://localhost:8000${pvNote.pdf_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  View PDF
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PvList;
