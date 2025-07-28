import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

export default function Nav({ search, setSearch }) {
  return (
    <nav className='nav'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder='Search the Anime'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li className='linkAbout'>
            <Link to="/about">About</Link>

        </li>
      </ul>
    </nav>
  )
}
