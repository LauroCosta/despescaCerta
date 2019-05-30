import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Main from './pages/Main';
import BiometricsList from "./pages/BiometricsList";

function isAuthenticated(){
    return true;
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
            <PrivateRoute path="/main" exact component={ Main } />
            <PrivateRoute path="/biometrics" exact component={ BiometricsList } />
        </Switch>
    </BrowserRouter>
);

export default Routes;