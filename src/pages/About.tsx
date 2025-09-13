import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        À propos de Loca-Chantier
      </h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Loca-Chantier est une marketplace dédiée à la location d’engins de
        chantier et de matériels professionnels. Notre objectif est de
        simplifier la mise en relation entre les entreprises du BTP, les
        artisans et les loueurs, afin de faciliter l’accès à des équipements
        fiables et disponibles rapidement.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Grâce à notre plateforme, vous pouvez comparer, réserver et gérer vos
        locations en quelques clics. Nous mettons l’accent sur la qualité du
        matériel, la transparence des tarifs et la rapidité du service.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Que vous soyez un professionnel du bâtiment ou un particulier ayant un
        chantier ponctuel, Loca-Chantier vous accompagne dans tous vos projets.
      </p>
    </div>
  );
};

export default About;
