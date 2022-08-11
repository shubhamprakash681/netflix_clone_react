import '../styles/header.scss'
import logo from './netflix.svg'

import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
        <nav className="header">
            <div className="left-header">
                <img src={logo} alt="netflix" />
            </div>

            <div className="mid-header">
                <Link className='links' to={'/'} >Home</Link>
                <Link className='links' to={'/'} >Movies</Link>
                <Link className='links' to={'/'} >Web Series</Link>
                <Link className='links' to={'/'} >Tv Shows</Link>
                <Link className='links' to={'/'} >Recently Added</Link>
                <Link className='links' to={'/'} >My List</Link>
                
            </div>

            <div className='srch'>
                <input type="text" placeholder='Search'/>
                <BsSearch className='src-icon' />
            </div>

            <div className="right-header">
                <div className="select-lang">
                    <select id="lang" >
                        <option value="volvo">English</option>
                        <option value="saab">हिन्दी</option>
                    </select>
                </div>
                <div className="sgn-div">
                    <button className="sign-in-btn">Sign In</button>

                </div>
            </div>
        </nav>
    </>
  )
}

export default Header