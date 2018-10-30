import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration : none;
`;

export default ({ link, children }) => {
    return (
        <StyledLink
            to={link}
        >
            {children}
        </StyledLink>
    );
};
