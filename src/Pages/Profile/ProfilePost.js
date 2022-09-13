import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
const ProfilePost = () => {
    const [user] = useAuthState(auth);
    const name= user.displayName

    // personal post data 
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/data?email=${user.email}`)
        .then(res=>res.json()).then(data=>console.log(data))
    },[])

    const navigate = useNavigate();
    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }
    return (
        <div>
            <div className='border-b-2 lg:w-96'>
            <h1 className='font-bold text-4xl mb-8'>{name}</h1>
            <p className='mb-4'>All Posts</p>
            </div>

            {/* posts data  */}
            <div>
                {
                    posts.slice(0,199).map(p=><div className="card bg-base-100 border-b-2 rounded-none mb-5 p-2  w-full">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={p.photo} />

                        </div>
                        <p className='ml-3'>{p.user} . <span>{p.date}</span></p>

                    </div>

                    <div className=''>
                        <h1 className='font-bold text-2xl'>{p.title}</h1>
                        <p className='mt-5'>{p.post.slice(0, 199)}
                            <span onClick={() => seeMore(p._id)} className='bg-primary'>see more</span></p>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default ProfilePost;