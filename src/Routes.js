import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";

import { Footer } from './components/organisms';

import {
    HomePage
} from './components/pages';

const Container = styled.div`
  width : 80%;
  max-width : 800px;
  height : 100%;
  margin : 0 auto;
`;

export default ({ todos }) => (
    <BrowserRouter>
        <div>
            <Container>
                <Switch>
                    <Route exact
                           path="/"
                           component={() => <HomePage todos={todos} />}
                    />
                </Switch>
            </Container>
            <Footer />
        </div>
    </BrowserRouter>
);