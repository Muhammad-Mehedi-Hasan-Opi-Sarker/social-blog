import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { FiEdit3 } from 'react-icons/fi';
import auth from '../../firebase.init';
import RequiredAuth from '../RequiredAuth';

const See = ({ data }) => {
    const [user, loading, error] = useAuthState(auth);
    const [reload, setReload] = useState(false);

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://sheltered-brushlands-10944.herokuapp.com/comment?id=${data._id}`)
            .then(res => res.json()).then(data => setComments(data));
    }, [reload])

    const [counter, setCounter] = useState(0);
    const like = () => setCounter(counter + 1);

    // comment 
    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const email = user.email;
        const id = data._id;
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const result = {
            id: id,
            user: user.displayName,
            photo: user.photoURL,
            date: date,
            comment: comment,
            email: email,
        };

        fetch(`https://sheltered-brushlands-10944.herokuapp.com/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setReload(!reload)
            })
    }
    // like for 
    const handleLike = e => {
        e.preventDefault();
        const count = e.target.count.value;
        const data = { count: count };

        /*  fetch(`http://localhost:5000/like/${count}`, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(data),
         })
             .then((response) => response.json())
             .then((data) => {
                console.log(data)
             }) */
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `http://localhost:5000/comment/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setReload(!reload)
                })
        }

    }

    return (

        <div>
            <div className="card bg-base-100 border-b-2 rounded-none mb-5 p-2 mt-8">
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={data.photo} />

                    </div>
                    <p className='ml-3 font-serif'>{data.user} . <span>{data.date}</span></p>

                </div>

                <div className='mb-5'>
                    <h1 className='font-bold text-2xl tracking-tight mb-5 font-serif'>{data.title}</h1>
                    <p className='  text-lg font-serif'>{data?.post}</p>
                </div>
                {/* form for comment  */}
                <form onSubmit={handleLike}>
                    <button className='text-xl' onClick={like}><FaHandHoldingHeart></FaHandHoldingHeart></button>
                    <button disabled name='count' className='mt-3 lg:mr-5 mr-5 font-bold w-12' id="" value={counter} >{counter}</button>
                </form>

                <RequiredAuth>
                    <form onSubmit={handleComment}>

                        <div>
                            <label htmlFor=""></label> <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>

                                <textarea name='comment' required className="w-96 textarea textarea-bordered h-24 mb-5" placeholder="Write comment"></textarea>
                                <input className='btn w-32' type="submit" value="Submit" />
                            </div>

                        </div>
                    </form>
                </RequiredAuth>

            </div>

            {/* comment  */}
            {
                comments.map(c => <div className="card bg-base-100 border-b-2 rounded-none mb-5 p-2 lg:w-3/5 w-96">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={c.photo} />

                        </div>
                        <p className='ml-3'>{c.user} . <span>{c.date}</span></p>

                        {/* delete  */}
                        <button onClick={()=>handleDelete(c._id)} className='ml-5 text-xl'><TiDelete></TiDelete></button>
                        {/* edit  */}
                        <p className='ml-3'><FiEdit3></FiEdit3></p>
                    </div>

                    <div className=''>
                        <p>{c.comment}</p>
                        <div className='flex'>

                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default See;