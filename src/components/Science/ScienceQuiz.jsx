import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { science_sub } from "../../utils/Data";
import { AiOutlineRocket } from "react-icons/ai";

const ScienceQuiz = () => {
  const { subjectId, subtopicId } = useParams();
  const subject = science_sub[0].topics.find((topic) => topic.id === subjectId);
  const subtopic = subject.subtopics.find((sub) => sub.id === subtopicId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < subtopic.quizzes.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getMessageForScore = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) {
      return `🎉 Excellent! You're a Quiz Master! 🏆`;
    } else if (percentage >= 60) {
      return `👏 Well done! You have a good understanding. 👍`;
    } else if (percentage >= 40) {
      return `🌟 Nice effort! Keep learning to improve. ✨`;
    } else {
      return `🙂 You can do better! Keep practicing. 💪`;
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-24 py-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className="max-w-xl">
        <div className="border  rounded-lg shadow-md p-6 mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {subtopic.name} Quiz
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {showScore ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quiz Completed!</h3>
                <p className="text-lg mb-6">
                  Your score is {score} out of {subtopic.quizzes.length}
                </p>
                <p className="text-lg">
                  {getMessageForScore(score, subtopic.quizzes.length)}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    {subtopic.quizzes[currentQuestion].question}
                  </h3>
                </div>
                <div>
                  {subtopic.quizzes[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleAnswerOptionClick(
                            option === subtopic.quizzes[currentQuestion].correct
                          )
                        }
                        className="block w-full bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-700 transition-colors"
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-xl">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">About {subtopic.name}</h2>
          <p>{subtopic.description}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Want to learn more?
          </h2>
          <Link
            to={`/workshop`}
            className="bg-yellow-600 text-white py-3 px-6 font-semibold rounded-lg flex max-w-72 mx-auto items-center justify-center hover:bg-yellow-700 transition-colors block "
          >
            <AiOutlineRocket className="mr-2 text-xl block font-bold" /> Attend
            Workshop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScienceQuiz;
