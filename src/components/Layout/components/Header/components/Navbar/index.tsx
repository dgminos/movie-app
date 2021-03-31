import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar: FC = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <a className='navbar-brand logo' style={{ color: "#1890ff" }} href='/'>
                    <i className='bi bi-film'></i>
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className="bi bi-list"></i>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink exact to='/' activeClassName='active' className='nav-link text-white' >Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/latest' activeClassName='active' className='nav-link text-white' >Latest
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/popular' activeClassName='active' className='nav-link text-white' >Popular
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/search' activeClassName='active' className='nav-link text-white' >Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export { Navbar }
