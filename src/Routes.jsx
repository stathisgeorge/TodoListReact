 import React from 'react';
import Login from './Login';
import App from './App';
 
export default function Routes() {
    return (
        <Switch>
            <Route path="/App" component={App} />
            <Route path="/Login" component={Login} />
         </Switch>
    );
}