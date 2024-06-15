import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../searchSlice';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className='searchBar'>

            <div>
                <input 
                    type="text" 
                    placeholder="Search courses..." 
                    onChange={handleSearchChange} 
                />
            </div>

            <div>
                <IoSearch style={{ color: 'gray' }} />
            </div>

        </div>
    );
};

export default Search;
