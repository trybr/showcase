import React, { Component } from 'react';

import CoursesListItem from '../components/courses-list-item';

export default class CoursesList extends Component {
    
    render() {   
        const courses = this.props.courses;     
        return(
            <ul className="courses-list">
                {courses.map((item, index) => (
                    <CoursesListItem
                    index={index}  
                    courseId={item.courseId}
                    courseTitle={item.title}
                    courseGrade={item.grade}
                    courseGenre={item.genre}
                    />
                ))}
            </ul>
        )
    }
}