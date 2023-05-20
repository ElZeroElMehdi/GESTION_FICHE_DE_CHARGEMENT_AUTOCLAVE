import React, { useState } from 'react';
import "./App.css"


const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    dropdown1: '',
    dropdown2: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // const handleDropdownChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };
  
  return (
    <>
      <div className="p-4">
        <div className="flex">
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> - </div>
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2">
            <h1 className="text-2xl font-bold m-auto w-max justify-center text-center">FICHE DE CHARGEMENT AUTOCLAVE</h1>
          </div>
          <div className="flex-auto bg-gray-500 justify-center text-center border-s-2"> - </div>
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>

          </div>
        </div>
        {/* ***************** */}

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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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
                value={inputValues.input1}
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

