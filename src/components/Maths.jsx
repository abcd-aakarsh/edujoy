import React from "react";
import { maths_sub } from "../utils/Data";

import MathsSubCard from "./MathsSubCard";
const Maths = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <section className="">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Select a Subject
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {" "}
            {maths_sub?.map((subject) => (
              <MathsSubCard
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

export default Maths;
