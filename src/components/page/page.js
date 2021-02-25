import React from 'react';
import css from './page.module.css';

export function Page({children}){
    return (
        <div className={css.page}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Log in</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
            <main className={css.mainContainer}>
               {children}
            </main>
        </div>
    )
}