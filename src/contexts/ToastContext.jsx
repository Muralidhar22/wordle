import { useEffect } from 'react';
import { createContext, useContext, useRef } from 'react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const tCRef = useRef(null);

  const ToastContainer = () => {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: '10000',
      transform: 'translate(-50%, -50%)',
    };
    return <div ref={tCRef} style={style} className="toasts-container"></div>;
  };

  const createToast = (message) => {
    const divEl = document.createElement('div');
    const textContent = document.createTextNode(message);
    divEl.style.width = '10rem';
    divEl.style.padding = '1rem';
    divEl.style.borderRadius = '0.5rem';
    divEl.style.backgroundColor = 'var(--background-color)';
    divEl.style.color = 'var(--color)';
    divEl.style.boxShadow = 'var(--box-shadow)';
    divEl.append(textContent);
    return divEl;
  };

  const toast = (message) => {
    const newToast = createToast(message);
    tCRef.current.append(newToast);
    setTimeout(() => {
      newToast.remove();
    }, 1800);
  };

  const value = {
    ToastContainer,
    toast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
