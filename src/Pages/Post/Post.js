import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Post.css';

const Post = () => {
    const [dUser, dLoading, dError] = useAuthState(auth);
    return (
        <div className='mt-16 lg:px-24 px-4'>
            
            <div className=''>
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
                  type="text" name='title'
                  ></textarea>
            </div>
        </div>
    );
};

export default Post;
                