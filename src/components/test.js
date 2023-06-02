import React, { useState } from 'react';

const Test = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
  ];

  const handleOptionChange = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleSave = () => {
    const selectedOptionLabels = options
      .filter((option) => selectedOptions.includes(option.id))
      .map((option) => option.label)
      .join('-');

    console.log('Selected Options:', selectedOptionLabels);
  };

  return (
    <div className="w-48">
      <div className="relative inline-flex">
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Options
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3.586L4.707 8.879a1 1 0 0 0 0 1.414L10 16.414l5.293-5.293a1 1 0 0 0 0-1.414L10 3.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <label
                key={option.id}
                className="flex items-center px-4 py-2 text-sm"
                role="menuitem"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
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
      <button
        type="button"
        className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Test;

