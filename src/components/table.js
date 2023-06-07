import React from 'react';

const Table = ({ data }) => {
    return (
        <>
            {
                data.length > 0 && (
                    <div className='border border-black w-full m-2 bg-slate-400'>
                        <div className='flex justify-center'>
                            <div className="w-full m-2 text-center border-r border-black">
                                Désignation 
                            </div>
                            <div className="w-full m-2 text-center border-r border-black">
                                N° OF
                            </div>
                            <div className="w-full m-2 text-center border-r border-black">

                                N° PV
                            </div>
                            <div className="w-full m-2 text-center">
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
                            <div className="w-full m-2 text-center border-r border-black">{item.des}</div>
                            <div className="w-full m-2 text-center border-r border-black">{item.of}</div>
                            <div className="w-full m-2 text-center border-r border-black">{item.pv}</div>
                            <div className="w-full m-2 text-center">{item.tc}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Table;
