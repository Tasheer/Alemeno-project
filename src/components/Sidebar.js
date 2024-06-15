import React from 'react';
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div>
                <CgProfile />
                <div>
                    User
                </div>
            </div>

            <div>
                <NavLink to='/' activeclassname='active'>
                    Courses
                </NavLink>
            </div>

            <div>
                <NavLink to='/dashboard' activeclassname='active'>
                    Dashboard
                </NavLink>
            </div>

        </div>
    )
}

export default Sidebar;