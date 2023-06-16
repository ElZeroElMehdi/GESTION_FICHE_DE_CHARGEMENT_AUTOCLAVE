import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Table from './table';
import print from '../print.png';
import "../App.css"

// const handleUpdate = () => {
//   const objectToUpdate = {
//     // Update with the new values for the object
//     semaine: 'new semaine',
//     matricule_1: 'new matricule_1',
//     de_date: 'desired de_date',
//     de_heure: 'desired de_heure',
//   };

//   fetch('/api/objects', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(objectToUpdate),
//   })
//     .then(response => {
//       if (response.ok) {
//         console.log('Object updated successfully');
//         // Handle success scenario
//       } else {
//         console.error('Error updating object:', response.statusText);
//         // Handle error scenario
//       }
//     })
//     .catch(error => {
//       console.error('Error updating object:', error);
//       // Handle error scenario
//     });
// };

const DestinationPage = () => {
  const location = useLocation();
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const { object } = location.state;
  const handleButtonClick = () => {
    setIsButtonVisible(false);

    // Function to be called after printing finishes
    const afterPrint = () => {
      setIsButtonVisible(true);
    };

    // Attach event listener for afterprint
    window.onafterprint = afterPrint;

    // Trigger the print dialog
    window.print();
  };


  return (
    <div className='m-2 p-2'>
      <div className="flex">
        <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> - </div>
        <div className="flex-auto bg-gray-500 justify-center text-center border-s-2">
          <h1 className="text-2xl font-bold m-auto w-max justify-center text-center">FICHE DE CHARGEMENT AUTOCLAVE</h1>
        </div>
        <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> -</div>
      </div>
      <div className='flex justify-center m-2'>
        <div className='flex'>
          <div className="mb-4  m-auto p-1 justify-center text-center ">
            <label htmlFor="id_semaine" className="mr-2">
              N° SEMAINE
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.semaine}
            </strong>
          </div>
        </div>
        <div className='flex m-auto border border-black'>
          <div className="mb-4 m-2">
            <label htmlFor="id_autoclave" className="mr-2">
              AUTOCLAVE
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.autoclave}
            </strong>
          </div>
          <div className="mb-4  m-2">
            <label htmlFor="id_n_cycle" className="mr-2">
              N° de Cycle
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.n_cycle}
            </strong>
          </div>
          <div className="mb-4  m-2">
            <label htmlFor="id_n_cycle" className="mr-2">
              N° courbe
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.n_courbe}
            </strong>
          </div>
        </div>
      </div>
      <div className='border border-black w-full m-2'>
        <h1 className=' m-auto bg-gray-100 w-full text-center' >CHARGEMENT</h1>
        <div className='flex justify-center'>

          <div className="mb-4 m-2">
            <label htmlFor="id_matricule_1" className="mr-2">
              Matricule(s) opérateur(s)
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.matricule_1}
            </strong>
          </div>

          <div className="mb-4 m-3">
            <label htmlFor="id_date_1" className="mr-2">
              Date :
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object._de_date}
            </strong>
          </div>

          <div className="mb-4 m-3">
            <label htmlFor="id_heure_1" className="mr-2">
              Heure :
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object._de_heure}
            </strong>
          </div>
        </div>
      </div>
      <Table data={object.table} />
      <div className='border border-black w-full m-2'>
        <h1 className=' m-2 bg-gray-100 w-full justify-center text-center' >DECHARGEMENT</h1>
        <div className='flex justify-center'>
          <div className="mb-4 m-2">
            <label htmlFor="id_matricule_2" className="mr-2">
              Matricule(s) opérateur(s)
            </label>
            <strong className="border border-gray-300 m-auto rounded">
              {object.matricule_1}
            </strong>
          </div>
          <div className="mb-4 m-2">
            <label htmlFor="id_date_2" className="mr-2">
              Date :
            </label>
            <span className=" border-gray-300 m-auto"> <strong>{new Date().toLocaleDateString()}</strong> </span>

          </div>

          <div className="mb-4 m-2">
            <label htmlFor="id_heure_2" className="mr-2">
              Heure :
            </label>
            <span className=" border-gray-300 m-auto"> <strong>{new Date().toLocaleTimeString()}</strong> </span>

          </div>
        </div>
      </div>
      {isButtonVisible && (
        <div className='flex justify-center'>
          <div className='btn w-auto self-center flex m-2'>
            <img src={print} alt='printer logo' className='w-10 h-10' onClick={handleButtonClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;
