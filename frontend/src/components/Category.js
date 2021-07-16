import React from 'react'

export default function Category(props) {
  const { img, title, amount } = props.category
  return (
    <article className="category">
      <a href="#">
        <div>
          <img src={img} alt="" />
        </div>
        <div
          style={{
            marginLeft: '1rem',
            marginBottom: '2rem',
            marginTop: '0.5rem',
          }}
        >
          <h1>{title}</h1>
          <p>{amount} người tham gia</p>
        </div>
      </a>
    </article>
  )
}
