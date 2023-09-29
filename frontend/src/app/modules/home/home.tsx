import React from "react";
import {Route, Link} from 'react-router-dom';

import styles from './home.module.scss';

export function Home() {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Home!</h1>

            <ul>
                <li>
                    <Link to="/">home root</Link>
                </li>
                <li>
                    <Link to="about"> About Us </Link>
                </li>
                <li>
                    <Link to="stock"> Stock data </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
