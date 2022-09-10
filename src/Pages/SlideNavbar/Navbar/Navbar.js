import React from 'react';
import { HiOutlineHome, HiOutlinePencilAlt } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsBookmarks } from 'react-icons/bs';
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-12 px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>

                <div className='flex-none navbar-center'>
                <ul className="menu menu-horizontal p-0">
                        
                        {/* home  */}
                        <li className='text-3xl lg:ml-5'><Link to='/home'><HiOutlineHome></HiOutlineHome></Link></li>
                        {/* notification  */}
                        <li className='text-4xl lg:ml-5'><a><IoIosNotificationsOutline></IoIosNotificationsOutline></a></li>
                        {/* bookmarks  */}
                        <li className='text-3xl lg:ml-5'><a><BsBookmarks></BsBookmarks></a></li>
                        {/* write post */}
                        <li className='text-3xl lg:ml-5'><Link to='/post'><HiOutlinePencilAlt></HiOutlinePencilAlt></Link></li>
                        {/* porfile  */}
                    </ul>
                </div>
                
                <div className="flex-none gap-2 lg:ml-80">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
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
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;