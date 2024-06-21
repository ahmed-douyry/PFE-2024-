import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function ParentCard() {
  const [announcements, setAnnouncements] = useState([]);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const announcementsPerPage = 6;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await api.get('/api/announcements');
        setAnnouncements(response.data);
        setVisibleAnnouncements(response.data.slice(0, announcementsPerPage));
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    fetchAnnouncements();
  }, []);

  const loadMoreAnnouncements = () => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * announcementsPerPage;
    const endIndex = startIndex + announcementsPerPage;
    setVisibleAnnouncements((prev) => [
      ...prev,
      ...announcements.slice(startIndex, endIndex),
    ]);
    setCurrentPage(nextPage);
    setIsExpanded(true);
  };

  const showLessAnnouncements = () => {
    setVisibleAnnouncements(announcements.slice(0, announcementsPerPage));
    setCurrentPage(1);
    setIsExpanded(false);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const truncateTitle = (title) => {
    return title.length > 35 ? `${title.substring(0, 35)}...` : title;
  };

  return (
    <div className='min-h-screen flex items-center justify-center flex-wrap'>
      {visibleAnnouncements.map((announcement) => (
        <div key={announcement.id} className='relative max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6'>
          <div className='absolute bg-blue-800 text-white p-2 text-center w-[50px] h-[60px] ml-3 mt-2' style={{ zIndex: 10, top: 0, fontWeight: 'bold' }}>
            <h3>{formatDate(announcement.created_at)}</h3>
          </div>
          <img src={`http://localhost:8000${announcement.image_url}`} alt="Not found!" className='w-full h-48 object-cover' />
          <div className='p-6' style={{ zIndex: 1 }}>
            <h2 className='font-semibold text-xl mb-2'>{truncateTitle(announcement.title)}</h2>
            <p className='text-gray-700 text-sm mt-2'>
              {announcement.description.length > 24 ? `${announcement.description.substring(0, 50)}...` : announcement.description}
            </p>
            <Link to={`/details/${announcement.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 w-72 ml-6 block'>
              lire plus
            </Link>
          </div>
        </div>
      ))}
      {visibleAnnouncements.length < announcements.length && (
        <button onClick={loadMoreAnnouncements} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4'>
          Voir Plus
        </button>
      )}
      {isExpanded && (
        <button onClick={showLessAnnouncements} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4'>
          Voir Moins
        </button>
      )}
    </div>
  );
}