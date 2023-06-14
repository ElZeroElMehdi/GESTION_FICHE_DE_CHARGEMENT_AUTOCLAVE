// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const DestinationPage = () => {
//   const location = useLocation();
//   const [object, setObject] = useState(null);

//   useEffect(() => {
//     console.log('Location:', location);

//     const searchParams = new URLSearchParams(location.search);
//     const encodedObject = searchParams.get('object');

//     console.log('Encoded Object:', encodedObject);

//     if (encodedObject) {
//       const decodedObject = JSON.parse(decodeURIComponent(encodedObject));
//       console.log('Decoded Object:', decodedObject);
//       setObject(decodedObject);
//     }
//   }, [location]);

//   console.log('Object:', object);

//   if (!object) {
//     return <div>Loading...</div>;
//   }
//   console.log(object);
//   return (
//     <div>
//       <h2>Object Details</h2>
//       <div>
//         <strong>Semaine:</strong> {object.semaine}
//       </div>
//       <div>
//         <strong>Autoclave:</strong> {object.autoclave}
//       </div>
//     </div>
//   );
// };

// export default DestinationPage;


import React from 'react';
import { useLocation } from 'react-router-dom';

const DestinationPage = () => {
    console.log('====================================');
    console.log(object);
    console.log('====================================');
  const location = useLocation();
  const { object } = location.state;
  return (
    <div>
      <h2>Object Details</h2>
      <div>
        <strong>Semaine:</strong> {object.semaine}
      </div>
      <div>
        <strong>Autoclave:</strong> {object.autoclave}
      </div>
      {/* Render other object details here */}
    </div>
  );
};

export default DestinationPage;