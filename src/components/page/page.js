import React from 'react';
import css from './page.module.css';
import { NavBar } from './navbar'

export function Page({children}){
    return (
        <div className={css.page}>
            <NavBar items={['HOME', 'Logout']} />
            <main className={css.mainContainer}>
               {children}
            </main>
        </div>
    )
}