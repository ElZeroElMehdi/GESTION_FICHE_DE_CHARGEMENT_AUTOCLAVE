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

  // const sendObj = (object) => {
  //   const encodedObject = encodeURIComponent(JSON.stringify(object));
  //   history.push(`/destination?object=${encodedObject}`);
  // };
  console.log('====================================');
  console.log(objects);
  console.log('====================================');
  return (
    <div>
      <ul>
        {objects.map((object) => (
          <li key={object.id} className="mb-2">
            <div>
              <strong>Semaine:</strong> {object.semaine}
            </div>
            <div>
              <strong>Matricule 1:</strong> {object.matricule_1}
            </div>
            <Link
              to={{
                pathname: '/DestinationPage',
                state: { object: object },
              }}
              // target="_blank"
            >
              Open Destination Page
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;

