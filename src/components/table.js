import React from 'react';

const Table = ({ data }) => {
    return (
        <>
            {
                data.length > 0 && (
                    <div className='border border-black w-full m-2 bg-slate-400'>
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
                )
            }
            {data.map((item, index) => (
                <div key={index}>
                    <div className='border border-black w-full m-2'>
                        <div className='flex justify-center bg-slate-200'>
                            <div className="mb-4 m-auto w-60 text-center">{item.des}</div>
                            <div className="mb-4 m-auto w-60 text-center">{item.of}</div>
                            <div className="mb-4 m-auto w-60 text-center">{item.pv}</div>
                            <div className="mb-4 m-auto w-60 text-center">{item.tc}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Table;
