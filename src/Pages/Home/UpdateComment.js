import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateComment = () => {
    const { id } = useParams();

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`/${id}`)
            .then(res => res.json()).then(data => setData(data));
    }, [])

    // comment update 
    const handleUpdate =e=>{
        e.preventDefault();
        const comment = e.target.comment.value;
        const data= {comment};

        const url = `http://localhost:5000/comment/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Update Successfully')
                console.log(data)

            })
    }

    return (
        <div>
            <div className='mt-16 lg:px-24 px-4 mr-4'>

                <form onSubmit={handleUpdate}>

                    {/* Details for  */}
                    <textarea
                        className="textarea textarea-primary tit h-40 mb-8 placeholder:text-3xl
rounded-none"
                        placeholder='Change your comment.....'
                        type="text" name='comment'
                        required
                    ></textarea> <br />
                    <input className='btn rounded-full border-none mb-48' style={{ backgroundColor: '#1a8917' }} type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateComment;