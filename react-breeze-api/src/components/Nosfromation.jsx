import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ id,title, description, tags }) => {
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 m-6">
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
  // const cards = [
  //   {
  //     id:1,
  //       title: "Développement Digital",
  //     description: "Le tronc commun en Développement Digital est une étape importante pour acquérir les bases nécessaires à l'étude, la conception, la construction, le développement, la mise au point,...",
  //     tags: [
  //       { text: "Technicien Spécialisé", className: "bg-gray-200" },
  //       { text: "Cours du jour", className: "bg-purple-200" },
  //       { text: "Diplomante", className: "bg-teal-200" },
  //       { text: "Tronc commun", className: "bg-blue-200" },
  //     ],
  //   },
  //   {
  //       id:2,
  //       title: "Infrastructure Digitale",
  //       description: " Le tronc commun en infrastructure digitale permet aux stagiaires de concevoir, administrer, optimiser, et sécuriser des architectures et infrastructures IT.  Au cours de cette étape, qui dure une année de...",
  //       tags: [
  //         { text: "Technicien Spécialisé", className: "bg-gray-200" },
  //         { text: "Cours du jour", className: "bg-purple-200" },
  //         { text: "Diplomante", className: "bg-teal-200" },
  //         { text: "Tronc commun", className: "bg-blue-200" },
  //       ],
  //     },
  //     {
  //       id:3,
  //       title: "Gestion des Entreprises",
  //       description: "Le tronc commun Gestion des Entreprises donne au stagiaire toutes les compétences nécessaires pour découvrir le monde des métiers de gestion et du commerce, garantir sa polyvalence et in fine...",
  //       tags: [
  //         { text: "Technicien Spécialisé", className: "bg-gray-200" },
  //         { text: "Cours du jour", className: "bg-purple-200" },
  //         { text: "Diplomante", className: "bg-teal-200" },
  //         { text: "Tronc commun", className: "bg-blue-200" },
  //       ],
  //     },
  //     {
  //       id:4,
  //       title: "Assistant Administratif",
  //       description: "Le tronc commun en Développement Digital est une étape importante pour acquérir les bases nécessaires à l'étude, la conception, la construction, le développement, la mise au point,...",
  //       tags: [
  //         { text: "Technicien", className: "bg-gray-200" },
  //         { text: "Cours du jour", className: "bg-purple-200" },
  //         { text: "Diplomante", className: "bg-teal-200" },
  //         { text: "Tronc commun", className: "bg-blue-200" },
  //       ],
  //     },
  //     {
  //       id:5,
  //       title: "Bac Pro",
  //       description: "Le Bac Pro permet aux bacheliers de renforcer leur insertion professionnelle, notamment en leur donnant la possibilité d'intégrer le marché de travail après l’obtention du baccalauréat, ou de poursuivre leurs études supérieures (Licence professionnelle, Ecole d’ingénieurs, Ecole de commerce…).",
  //       tags: [
  //         { text: "Technicien", className: "bg-gray-200" },
  //         { text: "Cours du jour", className: "bg-purple-200" },
  //         { text: "Diplomante", className: "bg-teal-200" },
  //         { text: "Tronc commun", className: "bg-blue-200" },
  //       ],
  //     },
  // ];
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