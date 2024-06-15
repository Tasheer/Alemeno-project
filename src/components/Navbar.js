import React from 'react';
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Search from './Search';


const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="p1">

                <div className='p1-user'>
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

            <div className="p2">
                <Search />
            </div>

        </div>
    )
}

export default Navbar;