import React, { useState } from "react";

const Question = ({ question, onAnswerChange, isAdmin, onEdit, onDelete }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
    onAnswerChange(question.id, newAnswer);
  };

  const handleEdit = () => {
    onEdit({
      ...question,
      text: prompt("Edit question:", question.text),
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      onDelete(question.id);
    }
  };

  const handleAddOption = () => {
    const newOption = prompt("Enter a new option:");
    if (newOption) {
      onEdit({
        ...question,
        options: [...question.options, newOption],
      });
    }
  };

  const handleEditOption = (index) => {
    const editedOption = prompt("Edit option:", question.options[index]);
    if (editedOption) {
      const newOptions = [...question.options];
      newOptions[index] = editedOption;
      onEdit({
        ...question,
        options: newOptions,
      });
    }
  };

  const handleDeleteOption = (index) => {
    if (window.confirm("Are you sure you want to delete this option?")) {
      const newOptions = [...question.options];
      newOptions.splice(index, 1);
      onEdit({
        ...question,
        options: newOptions,
      });
    }
  };

  // Render different input types based on question type
  let inputElement;
  switch (question.type) {
    case "radio":
      inputElement = (
        <div className="form-check">
          {question.options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={option}
                checked={answer === option}
                onChange={handleAnswerChange}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      );
      break;
    case "dropdown":
      inputElement = (
        <div>
          <select
            className="form-control"
            value={answer}
            onChange={handleAnswerChange}
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {isAdmin && (
            <div>
              <button
                className="btn btn-primary mt-2"
                onClick={handleAddOption}
              >
                Add Option
              </button>
              {question.options.map((option, index) => (
                <div key={index} className="input-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    value={option}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => handleEditOption(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => handleDeleteOption(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      break;
    case "text":
      inputElement = (
        <input
          type="text"
          className="form-control"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Enter your answer"
        />
      );
      break;

    default:
      inputElement = null;
  }

  return (
    <div className="mb-3">
      <p>{question.text}</p>
      {inputElement}
      {isAdmin && (
        <div className="mt-2">
          <button className="btn btn-warning" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger ml-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
