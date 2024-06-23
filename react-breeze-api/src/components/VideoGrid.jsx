import React, { useState } from 'react';

const videos = [
  "https://www.youtube.com/embed/h29Vk9ylyWw",
  "https://www.youtube.com/embed/NlK_7lScNb0",
  "https://www.youtube.com/embed/qzwCWDdVXbE",
  "https://www.youtube.com/embed/ayfndKJ3kOI",
  "https://www.youtube.com/embed/cq12KdaMr0k",
  "https://www.youtube.com/embed/JV364CGxKlc",
  "https://www.youtube.com/embed/uSDOxwh1mds",
  "https://www.youtube.com/embed/ZEjWstuWKeo",
  "https://www.youtube.com/embed/ECYCDEtGneE",
  "https://www.youtube.com/embed/YaHTPRquCbU",
  "https://www.youtube.com/embed/0DrVaq0aRAo",
  "https://www.youtube.com/embed/oVsxSXIVN8w",
  "https://www.youtube.com/embed/1LfPkivOJwM",
  "https://www.youtube.com/embed/gUzC3Y6rPvM",
  // Ajoutez plus de liens de vidéos ici
];

const VideoGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const videosToShow = showAll ? videos : videos.slice(0, 6);

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videosToShow.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src={video}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={toggleShowAll}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showAll ? 'Voir moins' : 'Voir plus'}
        </button>
      </div>
    </div>
  );
};

export default VideoGrid;