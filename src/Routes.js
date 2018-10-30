import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
    HomePage
} from './components/pages';

export default ({ todos }) => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact
                       path="/"
                       component={() => <HomePage todos={todos} />}
                />
            </Switch>
        </div>
    </BrowserRouter>
);