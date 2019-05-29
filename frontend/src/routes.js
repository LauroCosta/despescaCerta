import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" componet={() => <h1>Hello World</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;