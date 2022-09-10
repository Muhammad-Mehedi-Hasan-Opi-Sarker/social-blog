import React from 'react';
import { HiOutlineHome,HiOutlinePencilAlt } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsBookmarks } from 'react-icons/bs';
import { Link,Outlet } from "react-router-dom";
import Post from '../Post/Post';

const SlideNavbar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-32 bg-base-100 text-base-content">
                        
                        {/* home  */}
                        <li className='mb-8 text-xl'><Link to='/home'><HiOutlineHome></HiOutlineHome></Link></li>
                        {/* notification  */}
                        <li className='mb-8 text-2xl'><a><IoIosNotificationsOutline></IoIosNotificationsOutline></a></li>
                        {/* bookmarks  */}
                        <li className='mb-8 text-xl'><a><BsBookmarks></BsBookmarks></a></li>
                        {/* write post */}
                        <li className='mb-8 text-xl'><Link to='/post'><HiOutlinePencilAlt></HiOutlinePencilAlt></Link></li>
                        {/* porfile  */}
                        <li className='mb-8 text-xl'><a>pro</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SlideNavbar;