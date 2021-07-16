import React from 'react'
import Category from './Category'
import '../index.css'

export default function LCategory({ title, List }) {
  return (
    <section>
      <div style={{ marginTop: '3rem' }}>
        <h2>{title}</h2>
      </div>
      <div className="categoriesList">
        {List.map((category) => {
          return <Category key={category.id} category={category}></Category>
        })}
      </div>
    </section>
  )
}
