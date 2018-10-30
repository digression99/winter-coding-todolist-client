import React from 'react';
import {PageTemplate} from '../templates';
import {TodoList} from '../organisms';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import { Link } from '../atoms';
import {Header, Footer} from '../organisms';
import { TodoAddButton } from '../atoms';


const Wrapper = styled.div`
  position : relative;
  height : 100%;
`;

const FloatingButton = styled(Button)`
  position : absolute;
  bottom : 3rem;
  left : 1rem;
`;

const HomePage = ({todos}) => {
    return (
        <PageTemplate
            header={<Header/>}
            content={
                <>
                    <TodoList
                        todos={todos}
                    />
                    <TodoAddButton />
                </>
            }
            footer={<Footer/>}
        />
    );
};

export default HomePage;
