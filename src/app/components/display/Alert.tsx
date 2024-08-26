import React from 'react';
import styles from '../../styles/Alert.module.css'; 

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
