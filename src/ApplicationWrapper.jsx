

import React from "react";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./view/appRouter/AppRouter";
import NavBar from "./view/navbar/NavBar";

export default function ApplicationWrapper(){
    return  <BrowserRouter>
        <NavBar />
        <AppRouter />
    </BrowserRouter>
}