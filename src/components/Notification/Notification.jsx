import css from './Notification.module.css';
const Notification = ({ massage }) => {
  return <p className={css.notificationTitle}>{massage}</p>;
};

export default Notification;
