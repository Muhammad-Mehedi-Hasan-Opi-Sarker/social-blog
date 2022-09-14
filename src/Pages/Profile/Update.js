import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`)
            .then(res => res.json()).then(data => setData(data));
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const post = e.target.post.value;
        const data = { title, post };
        const url = `http://localhost:5000/post/${id}`;
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

                <form onSubmit={handleSubmit}>
                    {/* for title  */}
                    <textarea
                        className="textarea textarea-primary tit h-20 mb-8 placeholder:text-3xl
    rounded-none"
                        placeholder='Write Title'
                        type="text" name='title'
                    ></textarea><br />

                    {/* Details for  */}
                    <textarea
                        className="textarea textarea-primary tit h-40 mb-8 placeholder:text-3xl
    rounded-none"
                        placeholder='Tell Your Story.....'
                        type="text" name='post'
                    ></textarea> <br />
                    <input className='btn rounded-full border-none' style={{ backgroundColor: '#1a8917' }} type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;