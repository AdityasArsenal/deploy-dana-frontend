import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const baseStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    borderRadius: '5px',
    color: 'white',
    zIndex: 1000,
  };

  const typeStyle = {
    success: { backgroundColor: 'green' },
    error: { backgroundColor: 'red' },
  };

  return (
    <div style={{ ...baseStyle, ...typeStyle[type] }} onClick={onClose}>
      {message}
    </div>
  );
}
