import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardComponent = ({ title, description, tags }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 m-6">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`inline-block ${tag.className} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
        >
          {tag.text}
        </span>
      ))}
    </div>
  </div>
);

const Detailsfiliere = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/filiere.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const selectedCard = data.find((card) => card.id === parseInt(id, 10));
        setCard(selectedCard);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mb-10">
        <div className="max-w-full rounded overflow-hidden my-4 m-6">
          <img src={card.image} alt="Image Not Found" className="rounded" />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl text-blue-900 mb-4 flex justify-center">
              Présentation du tronc commun
            </div>
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.desCompelet}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray-100">
        <div className="font-bold text-3xl text-blue-900 mb-4 flex justify-center">
          Les options de la deuxième année
        </div>
        <div className="flex flex-wrap justify-center">
          {card.children.map((childCard) => (
            <CardComponent
              key={childCard.id}
              title={childCard.title}
              description={childCard.description}
              tags={childCard.tags}
              className={childCard.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailsfiliere;
