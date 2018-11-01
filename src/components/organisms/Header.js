import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 40px;
    &:link, &:visited {
        color: #777;
    }
    &:hover {
        color: #ffa8a8;
    }
    &:active {
        color: #ff8787;
    }
`;

const Header = styled.div`
  height : 100%;
  display : flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  letter-spacing : 3px;
`;

const HeaderSubtitle = styled.div`
  letter-spacing : 1px;
`;

export default () => {
    return (
        <Header>
            <HeaderLink
                to="/"
            >
                <HeaderTitle>Two Do List</HeaderTitle>
                <HeaderSubtitle>Do two things a day</HeaderSubtitle>
            </HeaderLink>
        </Header>
    );
};
