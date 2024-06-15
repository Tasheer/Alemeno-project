import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard';
import Navbar from './Navbar';

const HomeMainBar = () => {

    const courses = useSelector((state) => state.courses.courses);
    const searchQuery = useSelector((state) => state.search).toLowerCase();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const shouldShowContentSmallScreen = screenWidth < 1050
    const shouldShowContentLargeScreen = screenWidth >= 1051

    const filteredCourses = courses.filter((course) =>
        course.course_name.toLowerCase().includes(searchQuery) ||
        course.instructor_name.toLowerCase().includes(searchQuery)
    );

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>

            <Navbar className='nav' />

            <h1 className='heading'>
                Course List
            </h1>

            {
                shouldShowContentSmallScreen &&
                <div className='course-list'>
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            }

            {
                shouldShowContentLargeScreen &&
                <div className='course-list'>
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            }

        </div>
    );
}

export default HomeMainBar;
