import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, onClose, message }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleClick = (e) => {
    // Check if the click is outside the modal
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Listen for clicks outside the modal to close it
  React.useEffect((e) => {
    if (show) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-4 md:max-w-lg">
        <div className="p-4 md:p-6 flex flex-col items-center">
          <div className="text-lg mb-4">{message}</div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              onClose();
              navigate('/login');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
