import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import { jsPDF } from 'jspdf';

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
    doc.text(`Title: ${announcement.title}`, 10, 10);
    doc.text(`Description: ${announcement.description}`, 10, 20);

    // Check if image data is available
    if (announcement.image_url) {
      const base64data = announcement.image_url;
      doc.addImage(base64data, 'JPEG', 10, 30, 180, 160); 
    doc.save('announcement-details.pdf');
    } else {
      console.error('Image data not available');
    }
  };

  if (!announcement) return <div>Loading...</div>;

  return (
    <div className='container mx-auto p-4'>
      <div className='max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
        <img src={`http://localhost:8000${announcement.image_url}`} alt="Not found!" className='w-full h-48 object-cover' />
        <div className='p-6'>
          <h2 className='font-semibold text-xl mb-2'>{announcement.title}</h2>
          <p className='text-gray-700 text-sm mt-2'>{announcement.description}</p>
          <button onClick={generatePDF} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-2'>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
