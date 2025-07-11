import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ dismissToast, children }) {
  return (
    <ol className={styles.wrapper}>
      {children.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast 
            variant={variant} 
            dismiss={() => dismissToast(id)}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
