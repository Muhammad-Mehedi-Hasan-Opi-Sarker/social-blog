import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='mt-16'>
            <div className='titlle'>
                <input name='title' contentEditable
                className='h-16 placeholder:text-3xl demo' 
                type="text" placeholder='Write Title'/>
            </div>
        </div>
    );
};

export default Post;