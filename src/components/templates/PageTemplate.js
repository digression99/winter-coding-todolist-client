import React from 'react';
import styled from 'styled-components';

const PageTemplate = styled.div`
  display : flex;
  flex-direction : column;
  width : inherit;
  height : inherit;
`;

const HeaderTemplate = styled.div`
  flex : 2 0 auto;
  min-height : 5rem;
  justify-content : center;
  align-items : center;
`;

const ContentTemplate = styled.div`
  flex : 8 0 auto;
  min-height : 40rem;
`;

export default ({ header, footer, content }) => {
    return (
        <PageTemplate>
            <HeaderTemplate>
                {header}
            </HeaderTemplate>
            <ContentTemplate>
                {content}
            </ContentTemplate>
        </PageTemplate>
    );
};
