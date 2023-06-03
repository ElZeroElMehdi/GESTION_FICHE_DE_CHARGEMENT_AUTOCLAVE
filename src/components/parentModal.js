import React, { useState } from 'react';
import Modal from './modal';
import { HiPlus } from 'react-icons/hi';

const ParentComponent = ({SetselectedOptions}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveModal = (selectedOptions) => {
    SetselectedOptions(selectedOptions);
  };

  return (
    <div>
      <button
        className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={openModal}
      >
        <HiPlus className="w-6 h-6" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveModal}
        
      />
    </div>
  );
};

export default ParentComponent;
