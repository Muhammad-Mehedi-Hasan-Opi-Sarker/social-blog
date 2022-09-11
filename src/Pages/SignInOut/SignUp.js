import React from 'react';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Sheared/Loading';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      let errorElement;
      if(error){
        return <p>{errorElement = <p className='text-red-500'>{error?.message}   </p>}</p>
      }

      if (loading) {
        return <Loading></Loading>;
      }
      if (user) {
        
      }

      const handleEmail=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(name,email,password)
      }

    return (
        <div>
            <div className="card w-full bg-base-100 lg:px-96 gird justify-items-center">
                <form onSubmit={handleEmail}>
                    <div className="card-body border shadow">
                        <input required name='name' type="name" placeholder="User Name" className="input input-bordered w-full mb-3 lg:mt-12 mt-5" />
                        <input required name='email' type="email" placeholder="Email" className="input input-bordered w-full mb-5" />
                        <input required name='password' type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
                        {errorElement}
                        <input className='btn btn-neutral w-full' type="submit" value="SignUp" />
                        <p>Have Account? <span className='mb-5 text-secondary'><Link to='/signin'>Login Please</Link></span></p>
                        <input className='btn btn-neutral w-full' type="submit" value="Sign In With Google" />
                        <p className='lg:mb-12'></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;