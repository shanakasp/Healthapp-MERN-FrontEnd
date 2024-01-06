// Forum.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, newAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: newAnswer,
    }));
  };

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const editQuestion = (editedQuestion) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === editedQuestion.id ? editedQuestion : question
      )
    );
  };

  const deleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  const adminControls = (
    <div>
      <h3>Select Question Type</h3>
      <button
        onClick={() =>
          addQuestion({
            id: Date.now(),
            text: "New Text Question",
            type: "text",
          })
        }
      >
        Add Text Question
      </button>
      <button
        onClick={() =>
          addQuestion({
            id: Date.now(),
            text: "New Dropdown Question",
            type: "dropdown",
            options: ["", ""],
          })
        }
      >
        Add Dropdown Question
      </button>
      <button
        onClick={() =>
          addQuestion({
            id: Date.now(),
            text: "New Radio Question",
            type: "radio",
            options: ["Yes", "No"],
          })
        }
      >
        Add Radio Question
      </button>
    </div>
  );

  return (
    <div className="mb-3">
      <h2>Create Form</h2>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onAnswerChange={handleAnswerChange}
          isAdmin
          onEdit={editQuestion}
          onDelete={deleteQuestion}
        />
      ))}

      <button
        className="btn btn-primary ml-5"
        onClick={() => console.log("Answers:", answers)}
      >
        Submit Answers
      </button>
      <br></br>

      {/* Use Link component to navigate to SpecificQuestions */}

      {adminControls}
      <Link to="/form" className="btn btn-success mt-2">
        Add more specific questions
      </Link>
      {/* Define the route for SpecificQuestions */}
    </div>
  );
};

export default Forum;
