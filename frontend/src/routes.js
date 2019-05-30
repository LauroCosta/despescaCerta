import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';


function isAuthenticated(){
    return false;
}


const PrivateRoute = ( { component: Component, ... rest}) => (

    <Route 
        { ... rest } 
        render={props =>
            isAuthenticated() ? (
            <Component { ... props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
  />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Login } />
            <PrivateRoute path="/home" exact component={ Home } />
        </Switch>
    </BrowserRouter>
);

export default Routes;