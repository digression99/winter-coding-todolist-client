import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {
    HomePage,
    EditPage,
    NotFoundPage,
    CreatePage
} from './components/pages';

export default ({
                    todos,
                    onCreateFormSubmit
                }) => (
    <div
        style={{
            height: '100%'
        }}
    >
        <Switch>
            <Route exact
                   path="/"
                   component={() => <HomePage todos={todos}/>}
            />
            <Route path="/edit/:id"
                   component={() => <EditPage/>}
            />
            <Route path="/add" component={() =>
                <CreatePage
                    onSubmit={onCreateFormSubmit}

                />}
            />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
);