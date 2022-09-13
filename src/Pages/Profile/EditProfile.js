import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const EditProfile = () => {
    const [user] = useAuthState(auth);

    const handleProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = user?.email;
        console.log(email)
        const bio = e.target.bio.value;
        const age = e.target.age.value;
        const education = e.target.education.value;
        const school = e.target.school.value;

        const update = {
            name: name,
            bio: bio,
            age: age,
            education: education,
            school: school
        }

        const url = `http://localhost:5000/profile/${email}`;
        console.log(url)
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    };

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
                    <form onSubmit={handleProfile}>
                        <input required type="text" placeholder="Name" name='name' value={user?.displayName} disabled className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input required type="email" placeholder="email" name='email' value={user?.email} disabled className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <textarea className="textarea textarea-primary lg:w-80 mb-5" name='bio' placeholder="About your"></textarea> <br />
                        <input required type="number" placeholder="age" name='age' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input required type="text" placeholder="Education" name='education' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input required type="text" placeholder="School" name='school' className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                        <input className='btn' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;