import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackButtonList}>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          className={css.feedbackBtn}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
