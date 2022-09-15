import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { BsBookmarkCheck } from 'react-icons/bs';
import './Content.css';

const Content = ({ searchTerm }) => {
    const navigate = useNavigate();
    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-brushlands-10944.herokuapp.com/post')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    // bookmark for 
    const handleBookMark = e => {
        e.preventDefault()
        posts.map(p=>console.log(p.title))
        
    }

    return (
        <div>
            {
                posts.filter(sc => {
                    if (searchTerm == "") {
                        return sc
                    }
                    else if (sc.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return sc
                    }
                }).map(p => <div className="card border-b-2 rounded-none mb-5 p-2 lg:w-4/5 w-96">
                    {/* lg:w-3/4 = 75% */}
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={p.photo} />

                        </div>
                        <p className='ml-3'>{p.user} . <span>{p.date}</span></p>
                        <form onSubmit={handleBookMark}>
                            <button type='submit' className='grid items-center ml-16 text-xl'><BsBookmarkCheck></BsBookmarkCheck></button>
                        </form>

                    </div>

                    <div className=''>
                        <h1 className='font-bold text-2xl font-serif'>{p.title}</h1>
                        <p className='mt-5 tracking-tight leading-6 font-serif'>{p.post.slice(0, 300)}
                            <span onClick={() => seeMore(p._id)} className='text-2xl font-bold'>.....</span></p>
                    </div>
                </div>).reverse()
            }
        </div>
    );
};

export default Content;