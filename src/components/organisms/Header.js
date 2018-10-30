import React from 'react';
import styled from 'styled-components';

import { Link } from '../atoms';

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
            <Link link="/">
                <HeaderTitle>Two Dwo List</HeaderTitle>
                <HeaderSubtitle>Winter coding assignment</HeaderSubtitle>
            </Link>
        </Header>
    );
};
