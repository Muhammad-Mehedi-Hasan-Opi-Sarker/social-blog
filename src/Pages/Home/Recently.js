import React, { useEffect, useState } from 'react';

const Recently = () => {
    const [recent,setRecent] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json()).then(data=>setRecent(data))
    },[])
    return (
        <div>
            {
                recent.slice(2,7).map(r=><div className='ml-5 w-60 mb-5'>
                <div className="card w-60 bg-base-100 border-none rounded-none">
    
                    <div className="avatar offline">
                        <div className="w-8 rounded-full mr-3">
                            <img src={r.photo} />
                        </div>
                        <p>{r.user}</p>
                        
                    </div>
    
                    <div className="">
                        <h2 className="font-bold mr-8">{r.title}</h2>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default Recently;