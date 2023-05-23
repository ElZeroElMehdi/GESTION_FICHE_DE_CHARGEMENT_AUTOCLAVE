import React from 'react';

const Table = () => {
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
                {/* <h1 className=' m-2 bg-gray-100 w-full text-center' ></h1> */}
                <div className='flex justify-center'>
                    <div className="mb-4 m-auto">
                        example
                    </div>
                    <div className="mb-4 m-auto">
                        example
                    </div>
                    <div className="mb-4 m-auto">

                        example
                    </div>
                    <div className="mb-4 m-auto">
                        example
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
