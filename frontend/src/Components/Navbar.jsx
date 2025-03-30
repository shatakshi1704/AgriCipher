import React from 'react'
import { Link } from 'react-router-dom'
import "../styles.css"

export default function Navbar() {
  return (
    <div>
      <div className='navbar grid grid-two-cols bg-[#105d22] text-[#e3ffcf]'>
            <div>
            <a href='#'>
                <Link to={'/'}>Website Logo</Link>
            </a>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-10 p-8 font-playfair'>
                        <li className='nav-items'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to={'/about-us'}>About-Us</Link>
                        </li>
                        <li className='nav-items'>
                        <Link to={'/collection'}>Collection</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to={'/contact'}>Contact-Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
