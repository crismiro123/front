import React from 'react';
import css from './navbar.module.css';

export function NavBar({ items }) {
    return (
        <nav className={css.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/login">Log in</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/register">{items}</a></li>
            </ul>
        </nav>
    )
}