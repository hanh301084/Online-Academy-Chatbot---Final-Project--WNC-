import React from 'react'
import '../header.css'

export default function section(props) {
  return (
    <header>
      <a href="#" style={{ paddingRight: '1.2rem' }}>
        <img
          src="https://www.udemy.com/staticx/udemy/js/webpack/udemy-pride-logo.d1b003c808a949847374f9a4267e1053.svg"
          alt=""
          style={{ width: '110px', height: '32px' }}
        />
      </a>

      <ul>
        <li>
          <p className="menu">Category</p>
          <ul>
            <br></br>
            <li>
              <a href="#" className="item">
                Lập trình Web
              </a>
            </li>
            <li>
              <a href="#" className="item">
                Lập trình thiết bị di động
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  )
}
