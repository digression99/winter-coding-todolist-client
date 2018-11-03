import React from 'react';
import styled from 'styled-components';

const PageTemplate = styled.div`
  display : flex;
  flex-direction : column;
  width : inherit;
  min-height : 100vh;
`;

const HeaderTemplate = styled.div`
  flex : 2 0 auto;
  max-height : 7rem;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const FooterTemplate = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : flex-end;
  flex : 2 0 auto;
  min-height : 5rem;
  bottom : 0;
`;

const ContentTemplate = styled.div`
  position : relative;
  flex : auto;
  min-height : 40rem;
  width : 80%;
  max-width : 800px;
  margin : 0 auto;
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
            <FooterTemplate>
                {footer}
            </FooterTemplate>
        </PageTemplate>
    );
};
