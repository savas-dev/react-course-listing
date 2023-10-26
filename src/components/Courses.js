import React from 'react'
import Course from './Course'

function Courses({propsCourses, removeCourse}) {
  return (
    <div>
        <div>
            <h2 className='title'>My Courses</h2>
        </div>

        <div className='course-list'>
            {
                propsCourses.map((course) => {
                    return (
                        <Course propsCourseDetail={course} removeOneCourse={removeCourse} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Courses