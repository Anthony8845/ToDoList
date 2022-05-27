import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand pl-10">
            Note App
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/' >
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/About'>
                        Информация
                    </NavLink>
                </li>
               
            </ul>
        </div>
    </nav>
)