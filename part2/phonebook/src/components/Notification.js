import React from 'react';

const Notification = ({ message }) => {
  let style = 'error';
  if (message.startsWith('Added')) {
    style = 'add';
  }
  if (message === '') {
    style = '';
    return null;
  }

  return <div className={style}>{message}</div>;
};
export default Notification;
