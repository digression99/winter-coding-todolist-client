import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

import { CreateForm } from '../organisms';

const CreatePage = ({ onSubmit }) => {
    return (
        <PageTemplate
            header={<Header />}
            content={
                <CreateForm
                    onSubmit={onSubmit}
                />
            }
            footer={<Footer />}
        />
    );
};

export default CreatePage;
