import React, { useEffect, useState } from 'react';
import Content from './Content';
import Recently from './Recently';

const Home = () => {

    return (
        <div className='lg:px-24 px:4 grid justify-items-center'>
            <div className='lg:flex '>
                {/* content for  */}
                <div className='lg:ml-32'>
                    <Content></Content>
                </div>
                {/* recentry for        */}
                <div className='border-l-2'>
                    <Recently></Recently>
                </div>
            </div>
        </div>
    );
};

export default Home;