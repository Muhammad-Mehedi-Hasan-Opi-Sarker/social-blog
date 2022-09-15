import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';

const EditProfile = () => {
    const [user, loading] = useAuthState(auth);

    // get for personal data 
    const [profiles, setProfiles] = useState([]);
    const [reload, setReload] = useState(false);
    useState(()=>{
        fetch(`https://sheltered-brushlands-10944.herokuapp.com/profile?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProfiles(data))
    },[reload])


    if (loading) {
        return <Loading></Loading>
    }

    const handleProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = user?.email;
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

        const url = `https://sheltered-brushlands-10944.herokuapp.com/profile/${email}`;
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast('update success')
                }
                setReload(!reload)
            })
    };

    return (
        <div className='lg:px-20'>
            <h1 className='font-bold text-2xl'>About you</h1>
            <div className='grid lg:grid-cols-2'>
                {/* data show  */}
                {
                    profiles.map(profile => <div key={profile._id}>
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
                            <p>{profile.bio}</p>
                        </div>
                        <div className='border-b-2 grid justify-items-start mb-8'>
                            <h1 className='font-bold text-xl'>Age</h1>
                            <p>{profile.age}</p>
                        </div>
                        <div className='border-b-2 grid justify-items-start mb-8'>
                            <h1 className='font-bold text-xl'>Education</h1>
                            <p>{profile.education}</p>
                        </div>
                        <div className='border-b-2 grid justify-items-start mb-8'>
                            <h1 className='font-bold text-xl'>School</h1>
                            <p>{profile.school}</p>
                        </div>
                    </div>)
                }
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