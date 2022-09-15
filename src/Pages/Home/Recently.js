import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recently = () => {
    const [recent,setRecent] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('https://sheltered-brushlands-10944.herokuapp.com/post')
        .then(res=>res.json()).then(data=>setRecent(data))
    },[])

    const seeMore = id => {
        navigate(`/seeMore/${id}`)
    }

    return (
        <div>
            {
                recent.slice(2,7).map(r=><div className='mb-5'>
                <div className="card w-60 bg-base-100 border-none rounded-none">
    
                    <div className="avatar offline">
                        <div className="w-8 rounded-full mr-3">
                            <img src={r.photo} />
                        </div>
                        <p className='font-serif'>{r.user}</p>
                        
                    </div>
    
                    <div className="">
                        <h2 onClick={() => seeMore(r._id)} className="font-bold mr-8 font-serif">{r.title.slice(0,34)}</h2>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default Recently;