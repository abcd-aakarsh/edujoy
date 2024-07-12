import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";
import image1 from "../assets/image1.jpg";
const LearnPage = () => {
  const subjects = [
    {
      id: "science",
      name: "Science",
      overview: "Explore the natural world and its phenomena.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?t=st=1720811246~exp=1720814846~hmac=5d02cb2a28062663c2e4e7dc1638396098904154c20d6c81742840cb67f5e001&w=1060",
    },
    {
      id: "maths",
      name: "Mathematics",
      overview: "Study numbers, quantities, shapes, and patterns.",
      image:
        "https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?t=st=1720810978~exp=1720814578~hmac=c60992eb2dd4faa3afb12012ede4d63ded5c702457a3eb6d8343955dccccdc2a&w=1060",
    },
    {
      id: "engineering",
      name: "Engineering",
      overview:
        "Apply scientific principles to design and build structures, machines, devices, systems, materials, and processes.",
      image:
        "https://img.freepik.com/free-vector/flat-design-industry-4-0-background_23-2151326136.jpg?w=1060&t=st=1720811975~exp=1720812575~hmac=19f2a53ff6f505f4ec3ed24f7fc633927db246d6febede0ae6296affad389401",
    },
    {
      id: "computer",
      name: "Computer Programming",
      overview: "Explore the world of computers, software, and networks.",
      image:
        "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-3941.jpg?t=st=1720811892~exp=1720815492~hmac=446054fab201b2cc48577ded05fbac18af65159c6b2645dbe1255dfd3ade3bf5&w=1060",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <section className="mb-12">
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
