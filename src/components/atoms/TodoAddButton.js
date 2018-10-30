import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';

import { Link } from '../atoms';

const TodoAddButton = () => (
    <Link
        link="/add"
    >
        <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            style={{
                position : 'fixed',
                bottom : '3rem',
                right : '1rem',
            }}
        >
            <AddIcon />
        </Button>
    </Link>
);

export default TodoAddButton;
