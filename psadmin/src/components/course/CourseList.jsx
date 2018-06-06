import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow.jsx';

const CourseList = ({courses}) => {
    return (
    <table className="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
        </thead>
        <tbody>
            {courses.map(course => 
                <CourseListRow key={course.id} course={course}/>
            )}
        </tbody>
    </table>
    );
}