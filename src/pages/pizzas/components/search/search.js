import React from 'react';
import { Input, Form } from '../../../../components';
import css from './search.module.css'


export function Search() {
    return (
        <Form className={css.buscar}>
            <Input placeholder="Buscar mi pizza favorita" />
            <Input placeholder="Filtrar" />
            <Input placeholder="Ordenar" />

        </Form>

    )

}