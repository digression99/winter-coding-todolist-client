import React from 'react';
import styled from 'styled-components';

import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

const Wrapper = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : 3rem;
  font-weight : 400;
  letter-spacing: 4px;
  min-height : 40rem;
  color : #c2255c;
`;

const NotFoundPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            content={
                <Wrapper>
                    Nothing here.
                </Wrapper>}
            footer={<Footer />}
        />
    );
};

export default NotFoundPage;
