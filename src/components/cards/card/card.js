import React from 'react';
import css from './card.module.css';

export function Card(props) {
    const { title, imageUrl, body, children, alt = '' } = props
    return (
        <div className={css.cardcontainer}>
            <div className={css.imagecontainer}>
                <img className={css.image} src={imageUrl} alt={alt} />
            </div>
            <div className={css.title} >
                <h3>{title}</h3>
            </div>
            <div className={css.cuerpo}>
                <p>{body}</p>
            </div>
            {children}
        </div>
    )
}

