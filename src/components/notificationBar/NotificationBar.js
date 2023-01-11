import { Notifications, NotificationsOff, Remove } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import classes from './NotificationBar.module.css';

function NotificationBar() {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.notificationBarContainer}>
      <button
        className={classes.notificationsBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <NotificationsOff /> : <Notifications />}
      </button>
      {isOpen && (
        <div className={classes.notificationBar}>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className={classes.notification}>
                <p>{notification.name}</p>
                <button
                  className={classes.notificationBtn}
                  onClick={() => {
                    // Sterge notificarea din state cand se da click pe butonul inchide
                    const updatedNotifications = notifications.filter(
                      (n, i) => i !== index
                    );
                    setNotifications(updatedNotifications);
                  }}
                >
                  <Remove />
                </button>
              </div>
            ))
          ) : (
            <p className={classes.noNotifications}>
              There are no notifications.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationBar;
