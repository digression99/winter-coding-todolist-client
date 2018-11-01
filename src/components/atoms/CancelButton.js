import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)` 
  text-decoration : none;
  
  &:link, &:visited {
    color : white;
  }
`;


export default ({ isDisabled, link }) => {
    return (
        <StyledLink
            to={link}
        >
            <Button
                variant="contained"
                color="primary"
                disabled={isDisabled}
            >
                Cancel
            </Button>
        </StyledLink>
    );
};