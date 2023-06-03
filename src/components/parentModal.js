import React, { useState } from 'react';
import Modal from './modal';

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
        className="btn btn-primary bg"
        onClick={openModal}
      >
        Open Modal
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
