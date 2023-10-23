import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={css.statistic}>
      <h2 className={css.statisticTitle}>Statistics</h2>
      <ul className={css.siaiticList}>
        <li>
          Good: <span className={css.stylevalue}>{good}</span>
        </li>
        <li>
          Neutral: <span className={css.stylevalue}>{neutral}</span>
        </li>
        <li>
          Bad: <span className={css.stylevalue}>{bad}</span>
        </li>
        <li>
          Total feedback: <span className={css.stylevalue}>{total}</span>
        </li>
        <li>
          Positive feedback:
          <span className={css.stylevalue}>{percentage}%</span>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;
