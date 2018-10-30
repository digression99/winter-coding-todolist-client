import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";

import {
    Header,
    Footer
} from './components/organisms';

import {
    HomePage,
    EditPage,
    NotFoundPage
} from './components/pages';

export default ({ todos }) => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact
                       path="/"
                       component={() => <HomePage todos={todos} />}
                />
                <Route path="/edit/:id"
                       component={() => <EditPage />}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);