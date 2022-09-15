import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Recently from './Recently';
import See from './See';


const SeeMore = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://sheltered-brushlands-10944.herokuapp.com/post/${id}`)
            .then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div className='lg:px-16 px:4 grid justify-items-center'>
            <div className='lg:flex lg:gap-60'>
                {/* content for  */}
                <div className='lg:w-3/5 w-96'>
                    <See key={data._id} data={data}></See>
                </div>
                {/* recentry for    */}
                <div className='border-l-2'>
                    <Recently></Recently>
                </div>
            </div>
        </div>

    );
};

export default SeeMore;