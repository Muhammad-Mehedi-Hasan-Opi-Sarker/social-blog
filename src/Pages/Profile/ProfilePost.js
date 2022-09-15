import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

const ProfilePost = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName

    // personal post data 
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch(`https://sheltered-brushlands-10944.herokuapp.com/data?email=${user?.email}`)
            .then(res => res.json()).then(data => setPosts(data))
    }, [reload])

    const navigate = useNavigate();
    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    // delete for item
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `https://sheltered-brushlands-10944.herokuapp.com/post/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setReload(!reload)
                })
        }
    }
    return (
        <div className=''>
            <div className='border-b-2 lg:w-96'>
                <h1 className='font-bold text-4xl mb-8'>{name}</h1>
                <p className='mb-4'>All Posts</p>
            </div>

            {/* posts data  */}
            <div>
                {
                    posts.slice(0, 199).map(p => <div key={p._id} className="bg-primary mt-5 card grid justify-items-start border-b-2 rounded-none mb-5 p-2  w-full">
                        <span>{p.date}</span>

                        <div className='grid justify-items-start'>
                            <h1 onClick={() => seeMore(p._id)} className='font-bold text-2xl'>{p.title}</h1>
                            <p className='mt-5 tracking-tight' >{p.post.slice(0, 199)} see more </p>
                            <div className='flex'>
                                <span onClick={() => handleDelete(p._id)} className='mr-8 font-bold text-xl'><MdDeleteForever></MdDeleteForever></span>
                                <span className=' font-bold text-xl'><Link to={`/update/${p._id}`}><AiOutlineEdit></AiOutlineEdit></Link></span>
                            </div>
                        </div>
                    </div>).reverse()
                }
            </div>

        </div>
    );
};

export default ProfilePost;