import React from "react";

function Chat({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Chat;
