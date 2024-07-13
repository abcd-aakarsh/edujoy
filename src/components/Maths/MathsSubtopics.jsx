import React from "react";
import { useParams } from "react-router-dom";
import { maths_sub } from "../../utils/Data";
import { Link } from "react-router-dom";

const MathsSubtopics = () => {
  const { subjectId } = useParams();
  const subject = maths_sub[0].topics.find((topic) => topic.id === subjectId);
  console.log(subject);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">{subject.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
        {subject.subtopics?.map((subtopic) => (
          <Link
            to={`/learn/maths/${subjectId}/quiz/${subtopic.id}`}
            key={subtopic.id}
            className="block bg-white shadow-lg border hover:-translate-y-1 transition-all duration-75 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">{subtopic.name}</h3>
              <p className="text-gray-600 mb-4">{subtopic.description}</p>
              <Link
                to={`/learn/maths/${subjectId}/quiz/${subtopic.id}`}
                className="text-blue-500 border font-semibold rounded-full px-2 py-1 bg-slate-300 hover:underline"
              >
                Start Quiz
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MathsSubtopics;
