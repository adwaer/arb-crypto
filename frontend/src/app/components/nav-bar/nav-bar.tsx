import {Link, NavLink} from 'react-router-dom';
import styles from './nav-bar.module.scss';
import React from "react";

/* eslint-disable-next-line */
export interface NavBarProps {
}

export const NavBar = (props: NavBarProps) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/stock">Stock</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
