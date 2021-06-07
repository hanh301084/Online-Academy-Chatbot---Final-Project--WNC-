import React from 'react'

export default function Header(props) {
  return (
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        backgroundColor: 'white',
        height: '72px',
        width: '100%',
      }}
    >
      <a href="#" style={{ paddingRight: '1.2rem' }}>
        <img
          src="https://www.udemy.com/staticx/udemy/js/webpack/udemy-pride-logo.d1b003c808a949847374f9a4267e1053.svg"
          alt=""
          style={{ width: '110px', height: '32px' }}
        />
      </a>
      <nav style={{ position: 'relative' }}>
        <button
          type="button"
          style={{
            padding: '0 1.2rem',
            border: 'none',
            backgroundColor: 'white',
          }}
        >
          <span>Category</span>
        </button>
      </nav>
    </section>
  )
}
