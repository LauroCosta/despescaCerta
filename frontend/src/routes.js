import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact componet={ Login } />
        </Switch>
    </BrowserRouter>
);

export default Routes;