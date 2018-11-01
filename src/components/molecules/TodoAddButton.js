import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FixedLink = styled(Link)`
  position : fixed;
  bottom : 10%;
  right : 10%;
`;

const TodoAddButton = () => (
    <FixedLink
        to="/add"
    >
        <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
        >
            <AddIcon />
        </Button>
    </FixedLink>
);

export default TodoAddButton;
