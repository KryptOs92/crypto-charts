import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from "../homePage/HomePage";
import CryptoListPage from "../cryptoListPage/CryptoListPage"
export default function AppRouter() {


    return (

        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cryptoList" exact component={CryptoListPage} />
        </Switch>

    )
}
