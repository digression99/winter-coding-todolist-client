import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import {
    HomePage,
    EditPage,
    NotFoundPage,
    CreatePage,
    TestPage,
    TestSecondPage
} from './components/pages';

const Wrapper = styled.div`
  height : 100%;
`;

export default ({
                    todos,
                    onCreateFormSubmit,
                    onTodoNotification,
                    onEditFormSubmit,
                    onDeleteTodo,
                    onCompleteCheckClick
                }) => (
    <Wrapper>
        <Switch>
            <Route exact
                   path="/"
                   component={() => <HomePage
                       todos={todos}
                       onTodoNotification={onTodoNotification}
                       onCompleteCheckClick={onCompleteCheckClick}
                   />}
            />
            <Route
                path="/edit/:id"
                component={() => <EditPage
                    todos={todos}
                    onEditFormSubmit={onEditFormSubmit}
                    onDeleteTodo={onDeleteTodo}
                />}
            />
            <Route path="/add" component={() => <CreatePage onSubmit={onCreateFormSubmit}/>}
            />
            <Route
                path="/test/1"
                component={TestPage}
            />
            <Route
                path="/test/2"
                component={TestSecondPage}
            />
            <Route component={NotFoundPage}/>
        </Switch>
    </Wrapper>
);