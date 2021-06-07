import React from 'react'
import '../index.css'

export default function Courses(props) {
  const { img, title, category, teacher, price } = props.course
  return (
    <article className="course">
      <a href="#">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>
            {category} - {teacher}
          </p>
          <div>start evaluate</div>
          <h4>{price} $US</h4>
        </div>
      </a>
    </article>
  )
}
