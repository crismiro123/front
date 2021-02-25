import React from 'react';
import {Page} from '../../components'
import css from './index.module.css';

export default function Login({cris}){
    return <Page>
        <div className={css.test}>
            <span>Inicia sessión</span>
    <h1 className="text-style-1">y pide tu pizza favorita.</h1>
        </div>
        <form action="">
            <label htmlFor="Ingresese Su Nombre:"></label>
            <input type="text" text="Entre su nombre"/>
        </form>
        </Page>;
}
Login.route = '/login';
Login.getData = async function(){
    return {cris: 12};
}
