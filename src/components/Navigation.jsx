import React from "react";
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >Home</NavLink>
                    </li>
                    <li><NavLink to="/new"
                                 className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >Nieuwe post</NavLink>
                    </li>
                    <li><NavLink to="/blogposts"
                                 className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    >Alle post</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;