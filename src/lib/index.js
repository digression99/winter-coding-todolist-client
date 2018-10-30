import React from 'react';
import {toast} from "react-toastify";
import styled from 'styled-components';

const Wrapper = styled.div`
  display : flex;
  justify-content : center;
  color : #a61e4d;
  font-size : 1.1rem;
`;

export const toastMessage = msg => {
    toast(<Wrapper

    >
        {msg}
    </Wrapper>);
};