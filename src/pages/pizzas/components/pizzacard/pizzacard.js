import React from 'react';
import { Card } from '../../../../components'
import css from './pizzacard.module.css'

export function PizzaCard() {
    return (
        <div className={css.pizzacard}>
            <Card title='Margarita'
                imageUrl='https://i1.wp.com/www.thefoodieadventure.com/wp-content/uploads/2020/04/446732665_417279_1.jpg'
                body='8,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>

            </Card>
            <Card title='Barbacoa'
                imageUrl='http://wallpaperstock.net/pizza-basil-cheese-vegetables_wallpapers_54017_1280x960.jpg'
                body='10,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>

            </Card>
            <Card title='Carbonara' imageUrl='https://craftlog.com/m/i/4887788=s1280=h960' body='10,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>
            </Card>
            <Card title='Carbonara' imageUrl='https://craftlog.com/m/i/4887788=s1280=h960' body='10,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>
            </Card>

            <Card title='Carbonara' imageUrl='https://craftlog.com/m/i/4887788=s1280=h960' body='10,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>
            </Card>
            <Card title='Carbonara' imageUrl='https://craftlog.com/m/i/4887788=s1280=h960' body='10,99 €'>
                <button>Añadir al carrito</button>
                <button>Ver más</button>
            </Card>




        </div>

    )
}





