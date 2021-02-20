import React from 'react';
import PropTypes from 'prop-types'
import styles from './Notification.module.css'

const Notifications = ({text, type}) => {
    return (
        <p className={styles[type]}>{text}</p>
    );
};

Notifications.defaultProps = {
    type: 'success'
};

Notifications.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error'])
};

export default Notifications;

