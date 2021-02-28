import React from 'react';
import { Card } from '../../../../components'
import css from './pizzacard.module.css'

export function PizzaCard() {
    return (
        <div className={css.pizzacard}>
            <Card
                title='Margarita'
                imageUrl='https://i1.wp.com/www.thefoodieadventure.com/wp-content/uploads/2020/04/446732665_417279_1.jpg'
                body='8,99 €' />
            <br></br>
            <Card
                title='Barbacoa'
                imageUrl='http://wallpaperstock.net/pizza-basil-cheese-vegetables_wallpapers_54017_1280x960.jpg'
                body='10,99 €' />
            <Card
                title='Carbonara'
                imageUrl='https://lh3.googleusercontent.com/proxy/0UTI6BsCdCmqyHSi7a9lGxL1AjNwSlx262TbX-2QUkQSGDMoIh8wUwd-Pfc3EYtjUWyZVXcM_c-HEImbHvjcilnPEcXdbGEAV1CKNc8FTw'
                body='10,99 €' />
        </div>

    )
}





