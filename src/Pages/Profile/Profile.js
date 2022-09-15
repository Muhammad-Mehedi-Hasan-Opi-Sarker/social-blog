import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileDetails from './ProfileDetails';
import ProfilePost from './ProfilePost';

const Profile = () => {
    
    return (
        <div className='lg:px-28 px-4 mt-8'>
            <div className='grid justify-items-center lg:grid-cols-2'> 
                {/* profile for post */}
                <div className='mb-5'>
                    <ProfilePost></ProfilePost>
                </div>

                {/* profile for details  */}
                <div>
                    <ProfileDetails></ProfileDetails>
                </div>
            </div>
        </div>
    );
};

export default Profile;