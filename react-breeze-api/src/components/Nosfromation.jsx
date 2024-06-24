import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ id,title, description, tags }) => {
  return (

    <div className="w-[300px] rounded overflow-hidden shadow-lg my-4 m-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className={`inline-block ${tag.className} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
            {tag.text}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/detailsAA/${id}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Lire plus
        </button>
        </Link>
      </div>
    </div>

  );
};

const Nosformation = () => {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/filiere.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching the cards data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <CardComponent key={card.id} id={card.id} title={card.title} description={card.description} tags={card.tags}  />
      ))}
    </div>
  );
};

export default Nosformation;
// export {CardComponent} ;