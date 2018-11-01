import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import {
    HomePage,
    EditPage,
    NotFoundPage,
    CreatePage,
    TestPage
} from './components/pages';

const Wrapper = styled.div`
  height : 100%;
`;

export default ({
                    todos,
                    onCreateFormSubmit,
                    onTodoNotification,
                    onEditFormSubmit
                }) => (
    <Wrapper>
        <Switch>
            <Route exact
                   path="/"
                   component={() => <HomePage todos={todos} onTodoNotification={onTodoNotification}/>}
            />
            <Route
                path="/edit/:id"
                component={() => <EditPage todos={todos} onEditFormSubmit={onEditFormSubmit}/>}
            />
            <Route path="/add" component={() => <CreatePage onSubmit={onCreateFormSubmit}/>}
            />
            <Route
                path="/test"
                component={TestPage}
            />
            <Route component={NotFoundPage}/>
        </Switch>
    </Wrapper>
);