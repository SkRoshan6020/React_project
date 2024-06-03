import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const RouteCourses = () => {
    return (
        <div className="page">
            <h1>You are in the Courses Page!</h1>
            <h3>URL: localhost:3000/Courses</h3>
            <div className="courses-nav">
                <Link to="/courses/search">Search</Link>
                <Link to="/courses/list">List</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default RouteCourses