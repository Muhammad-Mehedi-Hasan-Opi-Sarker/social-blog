import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Post.css';

const Post = () => {
    const {id} = useParams();
    const [user, loading, error] = useAuthState(auth);

    const handlePost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const post = e.target.post.value;
        const data = {
            title: title,
            post: post,
            user: user.displayName,
            photo: user.photoURL
        }
        fetch(`http://localhost:5000/post`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }
    return (
        <div className='mt-16 lg:px-24 px-4'>

            <form onSubmit={handlePost}>
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
                <input className='btn rounded-full border-none' style={{ backgroundColor: '#1a8917' }} type="submit" value="Publish" />
            </form>
        </div>
    );
};

export default Post;
