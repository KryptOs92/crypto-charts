import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from "../homePage/HomePage";

export default function AppRouter() {


    return (

        <Switch>
            <Route match='/' component={HomePage} />
        </Switch>

    )
}
