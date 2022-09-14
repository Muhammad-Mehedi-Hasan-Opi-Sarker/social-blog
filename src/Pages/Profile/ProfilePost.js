import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
const ProfilePost = () => {
    const [user] = useAuthState(auth);
    const name= user?.displayName

    // personal post data 
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/data?email=${user.email}`)
        .then(res=>res.json()).then(data=>setPosts(data))
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
                    posts.slice(0,199).map(p=><div className="card grid justify-items-start bg-base-100 border-b-2 rounded-none mb-5 p-2  w-full">
                     <span>{p.date}</span>

                    <div className='grid justify-items-start'>
                        <h1 className='font-bold text-2xl'>{p.title}</h1>
                        <p className='mt-5 tracking-tight' >{p.post.slice(0, 199)}
                            <span onClick={() => seeMore(p._id)} className='bg-primary'>see more</span></p>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default ProfilePost;