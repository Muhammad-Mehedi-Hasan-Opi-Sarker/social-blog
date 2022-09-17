import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './Content';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [recent, setRecent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://sheltered-brushlands-10944.herokuapp.com/post')
            .then(res => res.json()).then(data => setRecent(data))
    }, [])

    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    return (
        <div className='lg:px-24 px:4 grid justify-items-center mt-8'>
            <div className='lg:flex '>
                {/* content for  */}
                <div className='lg:ml-32'>
                    <Content searchTerm={searchTerm}></Content>
                </div>
                {/* recentry for        */}
                <div className='card w-full shadow-2xl rounded-none bg-slate-50'>
                    <div className='mb-5 ml-4'>
                        <input
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}
                            className='input w-full max-w-xs mt-3 rounded-full border-none shadow-xl placeholder:text-black'
                            style={{ backgroundColor: '#D3D3D3' }}
                            type="text" name="" id=""
                            placeholder='search..'
                        />
                    </div>

                    <div>
                        {
                            recent.slice(2, 7).map(r => <div className='ml-5 lg:w-60 mb-5 bg-secondary'>
                                <div className="card w-full bg-slate-50 border-none rounded-none">

                                    <div className="avatar offline">
                                        <div className="w-8 rounded-full mr-3">
                                            <img src={r.photo} />
                                        </div>
                                        <p className='font-serif'>{r.user}</p>

                                    </div>

                                    <div className="">
                                        <h2 onClick={() => seeMore(r._id)} className="font-bold mr-8 font-serif">{r.title.slice(0, 34)}</h2>
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