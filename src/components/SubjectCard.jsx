import React from "react";
import { Link } from "react-router-dom";

const SubjectCard = ({ id, name, overview, image }) => {
  return (
    <Link
      to={`/learn/${id}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg"
    >
      <img src={image} alt={name} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{overview}</p>
      </div>
    </Link>
  );
};

export default SubjectCard;
