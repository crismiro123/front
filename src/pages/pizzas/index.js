import React from 'react';
import { Search } from "./components/search/search"
import { Page } from "../../components"
import { PizzaCard } from './components/pizzacard/pizzacard'
import css from './index.module.css'

export default function Pizzas() {
    return (
        <Page className={css.pagina}>
            <Search className={css.formulario} />
            <PizzaCard />

        </Page>

    )
}

Pizzas.route = "/pizzas"