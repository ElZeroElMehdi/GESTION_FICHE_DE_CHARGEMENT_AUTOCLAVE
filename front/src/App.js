import React, { useState, useEffect } from 'react';
import "./App.css"
import Table from './components/table';
import print from './print.png';
import update_time from './time_update.png';
import ParentComponent from './components/parentModal';
import axios from 'axios';
// import ObjectList from './components/fetchData';
import { Link } from 'react-router-dom';

const App = () => {


  const [showObjectList, setShowObjectList] = useState(false);

  const ShowData = () => {
    setShowObjectList(true);
  };

  const sendObjectToBackend = async (object) => {
    try {
      const response = await axios.post('http://localhost:3001/api/objects', object);

      if (response.status === 200) {
        console.log('Object sent successfully');

        const checkResponse = await axios.get('http://localhost:3001/api/objects');
        if (checkResponse.status === 200) {
          const objects = checkResponse.data;
          const exists = objects.some((obj) => obj.id === response.data.id);
          console.log('Data still exists:', exists);
        }
      } else {
        console.log('Error sending object:', response.data.error);
      }
    } catch (error) {
      console.error('Error sending object:', error.message);
    }
  };
  //still need it
  // const fetchObjectsFromBackend = async () => {
  //   try {
  //     const response = await axios.get('/api/objects');

  //     if (response.status === 200) {
  //       const objects = response.data;
  //       console.log('Objects retrieved successfully:', objects);
  //       // return objects;
  //       // Handle the retrieved objects here
  //     } else {
  //       console.log('Error retrieving objects:', response.data.error);
  //       // Handle any error logic here
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving objects:', error.message);
  //     // Handle any error logic here
  //   }
  // };












  var FuncWeekNumber = () => {
    var currentDate = new Date();
    var startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
  }

  const [inputValues22, SetinputValues22] = useState('');
  const [selectedOptions, SetselectedOptions] = useState([]);
  const [selectedOptions2, SetselectedOptions2] = useState([]);

  const [values, setValues] = useState([]);
  const [autoclave, setInputautoclave] = useState('');
  const [Cycle, setInputCycle] = useState('');
  const [Courbe, setInputCourbe] = useState('');
  const [Matricule, setInputMatricule] = useState('');
  const [of, setInput2] = useState('');
  const [des, setInput1] = useState('');
  const [de_date, setInput5] = useState('');
  const [de_heure, setInput6] = useState('');
  const [tc, setInput3] = useState('');
  const [pv, setInput4] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputautoclave = (event) => { setInputautoclave(event.target.value); };
  const handleInputCycle = (event) => { setInputCycle(event.target.value); };
  const handleInputCourbe = (event) => { setInputCourbe(event.target.value); };
  const handleInputMatricule = (event) => { setInputMatricule(event.target.value); };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleAdd = () => {
    setInput3(selectedOptions.join(' - '));
    setInput4(selectedOptions2.join(' - '));
    const newValues = [...values, { of, des, pv, tc }];
    if (of && des && tc && pv) {
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

  useEffect(() => { }, [selectedOptions]);

  useEffect(() => { }, [selectedOptions2]);

  const saveAsJson = () => {
    const data = {
      semaine: FuncWeekNumber(),
      autoclave: autoclave,
      n_cycle: Cycle,
      n_courbe: Courbe,
      matricule_1: Matricule,
      _de_date: de_date,
      _de_heure: de_heure,
      table: values,
      de_date,
    };
    sendObjectToBackend(data);
    // fetchObjectsFromBackend();
  };


  return (
    <>
      <div className="p-4">
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
              <span className="border-gray-300 m-auto"> {FuncWeekNumber()}  </span>
            </div>
          </div>
          <div className='flex m-auto border border-black'>
            <div className="mb-4 m-2">
              <label htmlFor="id_autoclave" className="mr-2">
                AUTOCLAVE
              </label>
              <input
                type="text"
                id="id_autoclave"
                name="id_autoclave"
                value={autoclave}
                onChange={handleInputautoclave}
                className="border border-gray-300 m-auto rounded"
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
                value={Cycle}
                onChange={handleInputCycle}
                className="border border-gray-300 m-auto rounded"
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
                value={Courbe}
                onChange={handleInputCourbe}
                className="border border-gray-300 m-auto rounded"
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
                value={Matricule}
                onChange={handleInputMatricule}
                className="border border-gray-300 m-auto rounded"
              />
            </div>
            <div className="mb-4 m-3">
              <label htmlFor="id_date_1" className="mr-2">
                Date :
              </label>
              <span className=" border-gray-300 m-auto"> <strong>{inputValues22.Date}</strong> </span>
            </div>

            <div className="mb-4 m-3">
              <label htmlFor="id_heure_1" className="mr-2">
                Heure :
              </label>
              <span className=" border-gray-300 m-auto"> <strong>{inputValues22.Heure}</strong> </span>
            </div>
            <div className="mb-4  m-2">
              <img src={update_time} alt='print' className='w-9' onClick={() => {
                SetinputValues22({
                  ...inputValues22,
                  Date: new Date().toLocaleDateString(),
                  Heure: new Date().toLocaleTimeString(),
                });
              }} />
            </div>

          </div>
        </div>


        {/* ***************** */}
        <Table data={values} />
        {/* ***************** */}


        <div className='border border-black w-full m-2' >
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
                <option value="example">Option for example</option>
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
            <div className=" m-3 flex justify-between">
              <label htmlFor="id_n_pv" className="m-auto mr-1 p-3">
                N° PV
              </label>
              <div className="mr-3 m-auto">
                <ParentComponent SetselectedOptions={SetselectedOptions2} />
              </div>
            </div>
            <div className=" m-3 flex justify-between">
              <label htmlFor="id_n_tc" className="m-auto mr-1 p-3">
                N° TC
              </label>
              <div className="mr-3 m-auto">
                <ParentComponent SetselectedOptions={SetselectedOptions} />
              </div>
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
                className="border border-gray-300 m-auto rounded"
              />
            </div>
            <div className="mb-4 m-2">
              <label htmlFor="id_date_2" className="mr-2">
                Date :
              </label>
              <span className=" border-gray-300 m-auto"> <strong>{de_date}</strong> </span>
              
            </div>

            <div className="mb-4 m-2">
              <label htmlFor="id_heure_2" className="mr-2">
                Heure :
              </label>
              <span className=" border-gray-300 m-auto"> <strong>{de_heure}</strong> </span>
             
            </div>
            <div className="mb-4  m-2">
              <img src={update_time} alt='print' className='w-9' onClick={handleAdd2} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='btn w-auto self-center flex m-2' onClick={() => {

          window.print();
        }}>
          <img src={print} alt="printer logo" className='w-10 h-10' />
        </div>
        <div className='btn w-auto self-center flex m-2' onClick={saveAsJson}>
          <h1 className='text-center'>save</h1>
        </div>
        <div className='btn w-auto self-center flex m-2'>
          <Link className='text-center' to="/fetchData">Fetch</Link>
        </div>
      </div>
    </>
  );
};

export default App;