import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";
import { subjects } from "../utils/Data";
const LearnPage = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <section className="">
          <h2 className="text-3xl font-bold mb-4">Select a Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                id={subject.id}
                name={subject.name}
                overview={subject.overview}
                image={subject.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnPage;
