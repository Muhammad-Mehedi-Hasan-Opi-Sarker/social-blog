import React from 'react';
import { HiOutlineHome,HiOutlinePencilAlt } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsBookmarks } from 'react-icons/bs';


const SlideNavbar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* <div className="drawer-content flex flex-col items-center justify-center">
                </div> */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-32 bg-base-100 text-base-content">
                        
                        <li className='mb-8 text-xl'><a><HiOutlineHome></HiOutlineHome></a></li>
                        <li className='mb-8 text-2xl'><a><IoIosNotificationsOutline></IoIosNotificationsOutline></a></li>
                        <li className='mb-8 text-xl'><a><BsBookmarks></BsBookmarks></a></li>
                        <li className='mb-8 text-xl'><a><HiOutlinePencilAlt></HiOutlinePencilAlt></a></li>
                        <li className='mb-8 text-xl'><a>pro</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SlideNavbar;