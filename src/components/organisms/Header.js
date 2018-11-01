import React from 'react';
import styled from 'styled-components';
import { HeaderLink } from "../atoms";

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
