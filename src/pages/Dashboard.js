import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCourseAsCompleted, updateCourseProgress } from '../coursesSlice';
import Navbar from '../components/Navbar';

const Dashboard = () => {

    const dispatch = useDispatch();
    const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const shouldShowContentSmallScreen = screenWidth < 1050
    const shouldShowContentLargeScreen = screenWidth >= 1051

    const handleProgressChange = (id, event) => {
        const progress = event.target.value;
        dispatch(updateCourseProgress({ id, progress }));
    };

    const handleMarkAsCompleted = (id) => {
        dispatch(markCourseAsCompleted(id));
    };

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
            <h1>
                Enrolled Courses
            </h1>

            {
                shouldShowContentSmallScreen &&
                <div className='course-list'>
                    {enrolledCourses.map((course) => (
                        <div key={course.id} className={`course-card ${course.completed ? 'completed' : ''}`}>
                            <img
                                src={course.thumbnail}
                                alt={course.course_name}
                            />
                            <h2>
                                {course.course_name}
                            </h2>
                            <p>
                                <b>Instructor:</b> {course.instructor_name}
                            </p>
                            <p>
                                {course.description}
                            </p>
                            <p>
                                <b>Duration:</b> {course.duration}
                            </p>
                            <p>
                                <b>Pre-requisites:</b> {course.pre_requisites}
                            </p>

                            <div>
                                <label>
                                    Progress:
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={course.progress}
                                    onChange={(e) => handleProgressChange(course.id, e)}
                                    disabled={course.completed}
                                />
                                <span>{course.progress}%</span>
                            </div>

                            <button onClick={() => handleMarkAsCompleted(course.id)} disabled={course.completed}>
                                {course.completed ? 'Completed' : 'Mark as Completed'}
                            </button>
                        </div>
                    ))}
                </div>
            }

            {
                shouldShowContentLargeScreen &&
                <div className='course-list'>
                    {enrolledCourses.map((course) => (
                        <div key={course.id} className={`course-card ${course.completed ? 'completed' : ''}`}>
                            <img
                                src={course.thumbnail}
                                alt={course.course_name}
                            />
                            <h2>
                                {course.course_name}
                            </h2>
                            <p>
                                <b>Instructor:</b> {course.instructor_name}
                            </p>
                            <p>
                                {course.description}
                            </p>
                            <p>
                                <b>Duration:</b> {course.duration}
                            </p>
                            <p>
                                <b>Pre-requisites:</b> {course.pre_requisites}
                            </p>

                            <div>
                                <label>
                                    Progress:
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={course.progress}
                                    onChange={(e) => handleProgressChange(course.id, e)}
                                    disabled={course.completed}
                                />
                                <span>{course.progress}%</span>
                            </div>

                            <button onClick={() => handleMarkAsCompleted(course.id)} disabled={course.completed}>
                                {course.completed ? 'Completed' : 'Mark as Completed'}
                            </button>
                        </div>
                    ))}

                </div>
            }
        </div>
    );
};

export default Dashboard;
