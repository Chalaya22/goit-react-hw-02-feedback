import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          className={css.feedbackBtn}
          name={option}
          // onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
