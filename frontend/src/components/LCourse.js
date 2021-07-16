import React from 'react'
import '../index.css'
import Course from './courses'

export default function LCourse({ title, List }) {
  return (
    <section>
      <div style={{ marginTop: '3rem' }}>
        <h2>{title}</h2>
      </div>
      <div className="coursesList">
        {List.map((course) => {
          return <Course key={course.id} course={course}></Course>
        })}
      </div>
    </section>
  )
}
