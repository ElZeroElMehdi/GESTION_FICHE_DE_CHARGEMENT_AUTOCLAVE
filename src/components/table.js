import React, { useEffect } from 'react';

const Table = ({ inputValues2 }) => {
    console.log('you are in table');
    console.log(inputValues2);
    return (
        <>
            <div className='border border-black w-full m-2'>
                <div className='flex justify-center'>
                    <div className="mb-4 m-auto">
                        Désignation
                    </div>
                    <div className="mb-4 m-auto">
                        N° OF
                    </div>
                    <div className="mb-4 m-auto">

                        N° PV
                    </div>
                    <div className="mb-4 m-auto">
                        N° TC
                    </div>
                </div>
            </div>

            <div className='border border-black w-full m-2'>
            {inputValues2.length > 1 && (
                <div className='flex justify-center'>
                    <div className="mb-4 m-auto">
                    exampl
                    </div>
                    <div className="mb-4 m-auto">
                    exampl
                    </div>
                    <div className="mb-4 m-auto">
                    example
                    </div>
                    <div className="mb-4 m-auto">
                    example
                    </div>
                </div>
            )}

            </div>
        </>
    );
};

export default Table;
