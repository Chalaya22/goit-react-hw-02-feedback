import React, { Component } from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total feedback: {total}</li>
        <li>Positive feedback: {percentage} %</li>
      </ul>
    </div>
  );
};
export default Statistics;
