import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;

  text-decoration : none;
  text-transform : uppercase;
  padding : 15px 40px;
  
  ${props => {
      if (props.primary) {
          return `
            &:link, &:visited {
                color : #777;
            }
            
            &:hover {
                color : #ffa8a8;
            }
            
            &:active {
                color : #ff8787;
            }
          `;
      }
}}
`;

export default ({ link, children, primary }) => {
    return (
        <StyledLink
            to={link}
            primary={primary}
        >
            {children}
        </StyledLink>
    );
};
