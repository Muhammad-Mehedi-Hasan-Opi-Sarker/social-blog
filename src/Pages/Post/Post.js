import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Post.css';
import { toast } from 'react-toastify';


const Post = () => {
    const {id} = useParams();
    const [user, loading, error] = useAuthState(auth);

    const handlePost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const post = e.target.post.value;
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const data = {
            title: title,
            post: post,
            user: user.displayName,
            photo: user.photoURL,
            email:user.email,
            date:date
        }
        fetch(`https://sheltered-brushlands-10944.herokuapp.com/post`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data){
                    
                    toast('Publish Your Post')
                }
            })
    }
    return (
        <div className='mt-16 lg:px-24 px-4 mr-4'>

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
                <input className='btn rounded-full border-none mb-32' style={{ backgroundColor: '#1a8917' }} type="submit" value="Publish" />
            </form>
        </div>
    );
};

export default Post;
