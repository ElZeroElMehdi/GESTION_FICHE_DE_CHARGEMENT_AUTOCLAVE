import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
    { id: 6, label: 'Option 6' },
    { id: 7, label: 'Option 7' },
    { id: 8, label: 'Option 8' },
    { id: 9, label: 'Option 9' },
    { id: 10, label: 'Option 10' },
  ];

  const handleOptionChange = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleSave = () => {
    onSave(selectedOptions);
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Select Options
              </h3>
              <div className="mt-4 space-y-4">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500"
                      value={option.id}
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => handleOptionChange(option.id)}
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;