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
                        
                        <li><a><HiOutlineHome></HiOutlineHome></a></li>
                        <li><a><IoIosNotificationsOutline></IoIosNotificationsOutline></a></li>
                        <li><a><BsBookmarks></BsBookmarks></a></li>
                        <li><a><HiOutlinePencilAlt></HiOutlinePencilAlt></a></li>
                        <li><a>profile</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SlideNavbar;