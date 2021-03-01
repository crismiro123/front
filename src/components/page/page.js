import React from 'react';
import css from './page.module.css';

export function Page({ children }) {
    return (
        <div className={css.page}>
            <nav className={css.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pizzas">Carta</a></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}