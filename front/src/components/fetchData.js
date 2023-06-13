import React, { useEffect, useState } from 'react';

const ObjectList = () => {
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
  console.log('OBJECT :', objects);
  return (
    <div>
      <ul>
        {
          objects.map((object) => (
            <li key={object.id} className="mb-2">
              <div>
                <strong>Semaine:</strong> {object.semaine}
              </div>
              <div>
                <strong>Autoclave:</strong> {object.autoclave}
              </div>
              <div>
                <strong>N° Cycle:</strong> {object.n_cycle}
              </div>
              <div>
                <strong>N° Courbe:</strong> {object.n_courbe}
              </div>
              <div>
                <strong>Matricule 1:</strong> {object.matricule_1}
              </div>
              <div>
                <strong>Date:</strong> {object._de_date}
              </div>
              <div>
                <strong>Heure:</strong> {object._de_heure}
              </div>
              <div>
                <strong>Table:</strong>
                <div className='w-full bg-slate-500 m-auto'>
                  <ul>
                    {object.table.map((item, index) => (
                      <li key={index}>
                        des: {item.des}, of: {item.of}, pv: {item.pv}, tc: {item.tc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ObjectList;
