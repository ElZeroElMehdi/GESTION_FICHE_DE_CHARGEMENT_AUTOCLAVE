import { log } from 'logrocket';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ObjectList = () => {
  // const history = useHistory();
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjectsFromBackend();
  }, []);

  const fetchObjectsFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/objects');
      const data = await response.json();
      setObjects(data);
    } catch (error) {
      console.error('Error fetching objects:', error);
    }
  };

  return (
    <div className='m-10'>
      <ul>
        {objects.map((object) => (
          <li key={object.id} className="flex items-center bg-gray-200 py-4 px-6">
            <h2 className="text-lg text-gray-800 mr-auto"><strong>Semaine:</strong> {object.semaine}   ,   <strong>Matricule 1:</strong> {object.matricule_1} ... </h2>
            <Link className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded" to={{ pathname: '/DestinationPage', state: { object: object }, }}  >
             See Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;

