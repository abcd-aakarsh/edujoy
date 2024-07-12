import React from "react";
import { Link } from "react-router-dom";

const ScienceSubCard = ({ id, name, overview, image }) => {
  return (
    <Link
      to={`/learn/science/${id}`}
      className="block bg-white shadow-lg hover:-translate-y-1 transition-all duration-75 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg"
    >
      <div className="rounded-2xl">
        <img src={image} alt={name} className="w-full h-auto rounded-lg p-4" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{overview}</p>
      </div>
    </Link>
  );
};

export default ScienceSubCard;
