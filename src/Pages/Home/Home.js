import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './Content';
import Recently from './Recently';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [recent, setRecent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json()).then(data => setRecent(data))
    }, [])

    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    return (
        <div className='lg:px-24 px:4 grid justify-items-center'>
            <div className='lg:flex '>
                {/* content for  */}
                <div className='lg:ml-32'>
                    <Content searchTerm={searchTerm}></Content>
                </div>
                {/* recentry for        */}
                <div className='border-l-2'>
                    <div className='mb-5 ml-4'>
                        <input
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}
                            className='input w-full max-w-xs border-cyan-800'
                            type="text" name="" id=""
                            placeholder='search..'
                        />
                    </div>

                    <div>
                        {
                            recent.slice(2, 7).map(r => <div className='ml-5 w-60 mb-5'>
                                <div className="card w-60 bg-base-100 border-none rounded-none">

                                    <div className="avatar offline">
                                        <div className="w-8 rounded-full mr-3">
                                            <img src={r.photo} />
                                        </div>
                                        <p>{r.user}</p>

                                    </div>

                                    <div className="">
                                        <h2 onClick={() => seeMore(r._id)} className="font-bold mr-8">{r.title}</h2>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;