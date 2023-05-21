import React, { useState } from 'react';
import "./App.css"


const App = () => {
  const [inputValues, setInputValues] = useState({
    SEMAINE: '',
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

  const handleInputChange = (e) => {
    if (e.key === 'Enter') {
      console.log(`Enter key pressed ${setInputValues.value}`);
    }
  };



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
    setInputValues((prevValues) => ({
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
              <label htmlFor="input1" className="mr-2">
                N° SEMAINE
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.SEMAINE}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          <div className='flex m-2 border border-black'>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                AUTOCLAVE
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.AUTOCLAVE}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4  m-2">
              <label htmlFor="input1" className="mr-2">
                N° de Cycle
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.Cycle}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>
        <div className='border border-black w-full m-2'>
          <h1 className=' m-2 bg-gray-100 w-full text-center' >CHARGEMENT</h1>

          <div className='flex justify-center'>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                Matricule(s)
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.Matricule}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                opérateur(s)
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.operateur}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                Date
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.Date}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                Heure
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.Heure}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

          </div>
        </div>
        {/* ***************** */}
        <div className='border border-black w-full m-2'>
          <div className='flex justify-center'>
            <div className="mb-4 m-2">
              <label htmlFor="dropdown2" className="mr-2">
                Désignation :
              </label>
              <select
                id="dropdown2"
                name="dropdown2"
                value={inputValues.Designation}
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
              <label htmlFor="input1" className="mr-2">
                N° OF
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.of}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                N° PV
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.pv}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                N° TC
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.tc}
                onChange={handleInputChange}
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
              <label htmlFor="input1" className="mr-2">
                Matricule(s)
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.de_Matricule}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                opérateur(s)
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.de_operateur}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                Date
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.de_Date}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4 m-2">
              <label htmlFor="input1" className="mr-2">
                Heure
              </label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={inputValues.Heure}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;

