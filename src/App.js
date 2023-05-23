import React, { useState } from 'react';
import "./App.css"
import Table from './components/table';

const handlePrint = () => {
  //hide all inputs
  window.print();
};

const App = () => {
  const [inputValues2, SetinputValues2] = useState({
    id_semaine: '',
    AUTOCLAVE: '',
    Cycle: '',
    Matricule: '',
    operateur: '',
    Date: '',
    Heure: '',
    COURBE: '',
    Designation: '',
    of: '',
    pv: '',
    tc: '',
    de_Matricule: '',
    de_operateur: '',
    de_Date: '',
    de_Heure: '',
  });
  const [inputValues22, SetinputValues22] = useState('');

  // const handleInputChange = (e) => {
  //   if (e.key === 'Enter') {
  //     console.log(`Enter key pressed ${SetinputValues2.value}`);
  //   }
  // };



  // const handleInputBlur = (e) => {
  //   handleInputChange(e);
  // };

  // const handleInputKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     handleInputChange(e);
  //   }
  // };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    SetinputValues2((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-4">
        <div className="flex">
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> - </div>
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2">
            <h1 className="text-2xl font-bold m-auto w-max justify-center text-center">FICHE DE CHARGEMENT AUTOCLAVE</h1>
          </div>
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> Page 1/1 </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex m-2 border border-black '>
            <div className="mb-4  border-black m-2">
              <label htmlFor="id_semaine" className="mr-2">
                N° SEMAINE
              </label>
              <input
                type="text"
                id="id_semaine"
                name="id_semaine"
                value={inputValues2.id_semaine}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          <div className='flex m-2 border border-black'>
            <div className="mb-4 m-2">
              <label htmlFor="id_autoclave" className="mr-2">
                AUTOCLAVE
              </label>
              <input
                type="text"
                id="id_autoclave"
                name="id_autoclave"
                value={inputValues2.AUTOCLAVE}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4  m-2">
              <label htmlFor="id_n_cycle" className="mr-2">
                N° de Cycle
              </label>
              <input
                type="text"
                id="id_n_cycle"
                name="id_n_cycle"
                value={inputValues2.Cycle}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>
        <div className='border border-black w-full m-2'>
          <h1 className=' m-2 bg-gray-100 w-full text-center' >CHARGEMENT</h1>

          <div className='flex justify-center'>
            <div className="mb-4 m-2">
              <label htmlFor="id_matricule_1" className="mr-2">
                Matricule(s) opérateur(s)
              </label>
              <input
                type="text"
                id="id_matricule_1"
                name="id_matricule_1"
                value={inputValues2.Matricule}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_date_1" className="mr-2">
                Date
              </label>
              <input
                type="text"
                id="id_date_1"
                name="id_date_1"
                value={inputValues2.Date}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4 m-2">
              <label htmlFor="id_heure_1" className="mr-2">
                Heure
              </label>
              <input
                type="text"
                id="id_heure_1"
                name="id_heure_1"
                value={inputValues2.Heure}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

          </div>
        </div>
        

        {/* ***************** */}
        <Table/>
        {/* ***************** */}

        
        <div className='border border-black w-full m-2'>
          <div className='flex justify-center'>
            <div className="mb-4 m-2">
              <label htmlFor="id_designation" className="mr-2">
                Désignation :
              </label>
              <select
                id="id_designation"
                name="id_designation"
                value={inputValues2.Designation}
                onChange={handleDropdownChange}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="">Désignation </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_n_of" className="mr-2">
                N° OF
              </label>
              <input
                type="text"
                id="id_n_of"
                name="id_n_of"
                value={inputValues22.of}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_n_pv" className="mr-2">
                N° PV
              </label>
              <input
                type="text"
                id="id_n_pv"
                name="id_n_pv"
                value={inputValues22.pv}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_n_tc" className="mr-2">
                N° TC
              </label>
              <input
                type="text"
                id="id_n_tc"
                name="id_n_tc"
                value={inputValues22.tc}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
                <span className="mr-2">+</span>
                Add Row
              </button>

            </div>
          </div>
        </div>
        {/* ***************** */}
        <div className='border border-black w-full m-2'>
          <h1 className=' m-2 bg-gray-100 w-full justify-center text-center' >DECHARGEMENT</h1>
          <div className='flex justify-center'>
            <div className="mb-4 m-2">
              <label htmlFor="id_matricule_2" className="mr-2">
                Matricule(s) opérateur(s)
              </label>
              <input
                type="text"
                id="id_matricule_2"
                name="id_matricule_2"
                value={inputValues2.de_Matricule}
                onChange={() => SetinputValues2}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_date_2" className="mr-2">
                Date
              </label>
              <input
                type="text"
                id="id_date_2"
                name="id_date_2"
                value={inputValues2.de_Date}
                onChange={() => SetinputValues2}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4 m-2">
              <label htmlFor="id_heure_2" className="mr-2">
                Heure
              </label>
              <input
                type="text"
                id="id_heure_2"
                name="id_heure_2"
                value={inputValues2.Heure}
                onChange={() => SetinputValues2}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

          </div>
        </div>
      </div>
      <div className='btn w-full flex justify-center' onClick={handlePrint}>print (logo)</div>
    </>
  );
};

export default App;