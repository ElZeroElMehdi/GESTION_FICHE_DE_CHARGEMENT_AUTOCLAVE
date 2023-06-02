import React, { useState } from 'react';
import "./App.css"
import Table from './components/table';
import print from './print.png';
import update_time from './time_update.png';

const handlePrint = () => {
  //hide all inputs
  console.log('print');
  window.print();
};

const App = () => {
  const [inputValues2, SetinputValues2] = useState([]);
  const [inputValues22, SetinputValues22] = useState('');
  
  const [values, setValues] = useState([]);
  
  const [tc, setInput4] = useState('');
  const [pv, setInput3] = useState('');
  const [of, setInput2] = useState('');
  const [des, setInput1] = useState('');
  const [de_date, setInput5] = useState('');
  const [de_heure, setInput6] = useState('');
  
  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };
  
  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };
  
  const handleInputChange3 = (event) => {
    setInput3(event.target.value);
  };
  
  const handleInputChange4 = (event) => {
    setInput4(event.target.value);
  };
  
  const handleAdd = () => {
    const newValues = [...values, { tc, pv, of, des}];
    if (tc && pv && of && des) {
      setValues(newValues);
      setInput1('');
      setInput2('');
      setInput3('');
      setInput4('');
    }
  };
  const handleAdd2 = () => {
    setInput5(new Date().toLocaleDateString());
    setInput6(new Date().toLocaleTimeString());
  };
  {/* ***************** */}






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
                // value={inputValues22.id_semaine}
                // onChange={() => SetinputValues22}
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
                // value={inputValues22.AUTOCLAVE}
                // onChange={() => SetinputValues22}
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
                // value={inputValues22.Cycle}
                // onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4  m-2">
              <label htmlFor="id_n_cycle" className="mr-2">
                N° courbe
              </label>
              <input
                type="text"
                id="id_n_cycle"
                name="id_n_cycle"
                // value={inputValues22.Cycle}
                // onChange={() => SetinputValues22}
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
                // value={inputValues22.Matricule}
                // onChange={() => SetinputValues22}
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
                value={inputValues22.Date}
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
                value={inputValues22.Heure}
                onChange={() => SetinputValues22}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4  m-2">
              <img src={update_time} alt='print' className='w-9' onClick={() => {
                SetinputValues22({
                  ...inputValues22,
                  Date: new Date().toLocaleDateString(),
                  Heure: new Date().toLocaleTimeString(),
                });
              }}/>
            </div>

          </div>
        </div>
        

        {/* ***************** */}
        <Table data={values}/>
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
                value={des}
                onChange={handleInputChange1}
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
                value={of}
                onChange={handleInputChange2}
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
                value={pv}
                onChange={handleInputChange3}
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
                value={tc}
                onChange={handleInputChange4}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleAdd}>
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
                // value={inputValues22.de_Matricule}
                // onChange={() => SetinputValues2}
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
                value={de_date}
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
                value={de_heure}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4  m-2">
              <img src={update_time} alt='print' className='w-9' onClick={handleAdd2} />
            </div>
          </div>
        </div>
      </div>
      <div className='btn w-full flex justify-center' onClick={handlePrint}>
        <img src={print} alt="printer logo" className='w-10 h-10' />
      </div>
    </>
  );
};

export default App;