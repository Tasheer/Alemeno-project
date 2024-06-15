import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse } from '../coursesSlice';
import { IoCloseSharp } from "react-icons/io5";

const CourseCard = ({ course }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showSyllabus, setShowSyllabus] = useState(false);
    const {
        course_name,
        instructor_name,
        schedule,
        enrollement_status,
        location,
        description,
        duration,
        pre_requisites,
        syllabus
    } = course;

    const handleDetailsClick = () => setShowDetails(!showDetails);
    const handleSyllabusClick = () => setShowSyllabus(!showSyllabus);


    const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
    const isEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id);

    const handleEnroll = () => {
        dispatch(enrollCourse(course));
    };

    const dispatch = useDispatch();

    if (showDetails) {
        document.body.classList.add('active-details')
    } else {
        document.body.classList.remove('active-details')
    };

    return (
        <>
            <div className='course-card'>

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

                <div className="btn">
                    <button onClick={handleEnroll} disabled={isEnrolled}>
                        {isEnrolled ? 'Enrolled' : 'Enroll now'}
                    </button>
                    <button onClick={handleDetailsClick}>View details</button>
                </div>

            </div>

            {showDetails && (
                <div className="popup">

                    <div onClick={handleDetailsClick} className="overlay"></div>

                    <div className='popup-content'>

                        <h3>
                            Course Details
                        </h3>

                        <button className="close-details" onClick={handleDetailsClick}>
                            <IoCloseSharp />
                        </button>

                        <ul>
                            <li>
                                <b>Course Name:</b> {course_name}
                            </li>
                            <li>
                                <b>Instructor:</b> {instructor_name}
                            </li>
                            <li>
                                <b>Description:</b> {description}
                            </li>
                            <li>
                                <b>Enrollment Status:</b> {enrollement_status}
                            </li>
                            <li>
                                <b>Duration:</b> {duration}
                            </li>
                            <li>
                                <b>Schedule:</b> {schedule}
                            </li>
                            <li>
                                <b>Location:</b> {location}
                            </li>
                            <li>
                                <b>Pre-requisites:</b> {pre_requisites}
                            </li>
                        </ul>

                        <button onClick={handleSyllabusClick} className='btn-syll'>
                            {showSyllabus ? 'Show less' : 'Show more'}
                        </button>

                        {showSyllabus && (
                            <div className="syllabus">
                                <h3>
                                    Syllabus
                                </h3>
                                <p>
                                    {
                                        syllabus.map((syll) => (
                                            <ul type="none">
                                                <li key={syll.week}>
                                                    <b>Week:</b> {syll.week}
                                                    <br />
                                                    <b>Topic:</b> {syll.topic}
                                                    <br />
                                                    <b>Content:</b> {syll.content}
                                                    <br />
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}










        </>
    );
};

export default CourseCard;
