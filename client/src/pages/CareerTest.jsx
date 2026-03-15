import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: ["Mathematics", "Biology", "Business", "Arts", "Technology"]
  },
  {
    question: "What type of work excites you?",
    options: [
      "Solving complex problems",
      "Helping people",
      "Creating designs",
      "Managing teams"
    ]
  },
  {
    question: "What type of environment do you prefer?",
    options: [
      "Working with computers",
      "Working with people",
      "Working outdoors"
    ]
  },
  {
    question: "Which skill describes you best?",
    options: [
      "Analytical thinking",
      "Creativity",
      "Communication",
      "Leadership"
    ]
  },
  {
    question: "What motivates you most?",
    options: [
      "Innovation",
      "Helping society",
      "Financial success",
      "Creative expression"
    ]
  }
];

function CareerTest() {

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {

    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("All Answers:", updatedAnswers);

      // later we send answers to AI backend
      navigate("/career-result");
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl">

        {/* Progress Bar */}

        <div className="mb-6">
          <div className="h-3 bg-gray-200 rounded-full">
            <div
              className="h-3 bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Question */}

        <h2 className="text-2xl font-bold mb-6">
          {questions[currentQuestion].question}
        </h2>

        {/* Options */}

        <div className="space-y-4">

          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full border p-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              {option}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default CareerTest;