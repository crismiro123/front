import React from 'react';
import {Search} from "./components/search/search"
import {Page} from "../../components"

export default function Pizzas(){
    return (
        <Page>
            <Search/>
        </Page>
       
    )
}

Pizzas.route = "/pizzas"