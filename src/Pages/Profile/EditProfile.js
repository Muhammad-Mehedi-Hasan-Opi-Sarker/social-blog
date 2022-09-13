import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const EditProfile = () => {
    const [user] = useAuthState(auth);


    return (
        <div className='lg:px-20'>
            <h1 className='font-bold text-2xl'>About you</h1>
            <div className='grid lg:grid-cols-2'>
                {/* data show  */}
                <div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>Name</h1>
                        <p>{user?.displayName}</p>
                    </div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>Email</h1>
                        <p>{user?.email}</p>
                    </div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>Short bio</h1>
                        <p></p>
                    </div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>Age</h1>
                        <p></p>
                    </div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>Education</h1>
                        <p></p>
                    </div>
                    <div className='border-b-2 grid justify-items-start mb-8'>
                        <h1 className='font-bold text-xl'>School</h1>
                        <p></p>
                    </div>
                </div>
                {/* form  */}
                <div>
                    <form>
                        <input type="text" placeholder="Name" name='name' value={user.displayName} disabled className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input type="email" placeholder="email" name='email' value={user.email} disabled className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <textarea className="textarea textarea-primary lg:w-80 mb-5" name='about' placeholder="About your"></textarea> <br />
                        <input type="number" placeholder="age" name='age' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input type="text" placeholder="Education" name='education' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input type="text" placeholder="School" name='school' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input className='btn' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;