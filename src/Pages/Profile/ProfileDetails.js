import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from "react-router-dom";

const ProfileDetails = () => {
    
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    return (
        <div className='border-l-2 h-96'>
            <div className="avatar mr-20">
                <div className="w-20 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <h4 className='font-bold text-2xl ml-5 font-serif'>{name}</h4>
            <p className='text-green-500 mr-16 font-serif'><Link to='/edit'>Edit Profile</Link></p>
        </div>
    );
};

export default ProfileDetails;