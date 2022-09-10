import React from 'react';
import { HiOutlineHome, HiOutlinePencilAlt } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsBookmarks } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const nav = <>
        {/* home  */}
        <li className='text-4xl lg:ml-3'><Link to='/home'><HiOutlineHome></HiOutlineHome></Link></li>
        {/* notification  */}
        <li className='text-5xl lg:ml-3'><a><IoIosNotificationsOutline></IoIosNotificationsOutline></a></li>
        {/* bookmarks  */}
        <li className='text-4xl lg:ml-3'><a><BsBookmarks></BsBookmarks></a></li>
        {/* write post */}
        <li className='text-4xl lg:ml-3'><Link to='/post'><HiOutlinePencilAlt></HiOutlinePencilAlt></Link></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">OPI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end gap-2">

                {/* profile pic and search  */}
               
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-40" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><Link to='/signin'>Logout</Link></li>
                        </ul>
                    </div>
                
            </div>
        </div>
    );
};

export default Navbar;