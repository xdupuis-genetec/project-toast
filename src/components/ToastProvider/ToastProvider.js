import React, { useCallback } from 'react';

export const ToastContext = React.createContext(); 

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (newToast) => {
      setToasts([...toasts, newToast]);
    }, [toasts]);
  
  const dismissToast = React.useCallback(
    (id) => {
      const remainingToasts = [...toasts].filter((toast) => toast.id !== id)
      setToasts(remainingToasts);
    }, [toasts]);


  const value = React.useMemo(() => 
    ({ toasts, addToast, dismissToast }), 
    [toasts, addToast, dismissToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
