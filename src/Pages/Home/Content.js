import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Content.css';

const Content = () => {
    const navigate = useNavigate();
    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(p => <div className="card bg-base-100 border-b-2 rounded-none mb-5 p-2 lg:w-3/5 w-96">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={p.photo} />

                        </div>
                        <p className='ml-3'>{p.user} . <span>{p.date}</span></p>

                    </div>

                    <div className=''>
                        <h1 className='font-bold text-2xl'>{p.title}</h1>
                        <p className='mt-5 tracking-tight leading-6'>{p.post.slice(0, 199)}
                            <span onClick={() => seeMore(p._id)} className='bg-primary'>see more</span></p>
                    </div>
                </div>).reverse()
            }
        </div>
    );
};

export default Content;